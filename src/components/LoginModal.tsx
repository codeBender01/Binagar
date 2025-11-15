import { Modal, Input, Button, message } from "antd";

import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import formatTime from "../utils/formatTime";

import {
  useClientLoginMutation,
  useClientVerifyMutation,
} from "../services/clientAuthApi";

interface LoginModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LoginModal: FC<LoginModalProps> = ({ open, setOpen }) => {
  const [login] = useClientLoginMutation();
  const [verify] = useClientVerifyMutation();

  const [activeTab, setActiveTab] = useState("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loginType, setLoginType] = useState("phone");
  const [countdown, setCountdown] = useState(60);
  const [verificationNumber, setVerificationNumber] = useState<number | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (loginType === "phone") {
      const numericValue = e.target.value.replace(/\D/g, "");
      setPhone(numericValue);
    } else {
      setEmail(e.target.value);
    }
  };

  const handleLogin = async () => {
    if (countdown === 0) setCountdown(60);
    if (loginType === "phone") {
      const res = await login({ phoneNumber: "+993" + phone });
      if (res.data) {
        setActiveTab("verify");
      }
    } else {
      const res = await login({ email: email });
      if (res.data) {
        setActiveTab("verify");
      }
    }
  };

  const handleVerify = async () => {
    const res = await verify({
      phoneNumber: "+993" + phone,
      code: verificationNumber as number,
    });

    if (res.data) {
      message.success("Üstünlikli!");
      setOpen(false);
    } else {
      message.error("Ýalňyşlyk ýüze çykdy!");
    }
  };

  useEffect(() => {
    if (countdown <= 0 || activeTab !== "verify") return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, activeTab]);

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={() => setOpen(false)}
      styles={{
        content: {
          backgroundColor: "var(--color-modalBg)",
          color: "var(--color-text-primary)",
        },
        header: {
          backgroundColor: "var(--color-modalBg)",
          color: "var(--color-text-primary)",
        },
      }}
    >
      <div
        className="flex flex-col items-center gap-4"
        style={{ color: "var(--color-text-primary)" }}
      >
        {activeTab !== "verify" ? (
          <div className="flex gap-4 items-center font-geo text-2xl">
            <span
              onClick={() => setActiveTab("phone")}
              className={`${
                activeTab === "phone" ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white duration-200 cursor-pointer p-2 rounded-2xl`}
              style={
                activeTab !== "phone"
                  ? { color: "var(--color-text-primary)" }
                  : {}
              }
            >
              Telefon
            </span>
            <span style={{ color: "var(--color-text-primary)" }}>|</span>
            <span
              onClick={() => setActiveTab("email")}
              className={`${
                activeTab === "email" ? "bg-primary text-white" : ""
              } hover:bg-primary hover:text-white duration-200 cursor-pointer p-2 rounded-2xl`}
              style={
                activeTab !== "email"
                  ? { color: "var(--color-text-primary)" }
                  : {}
              }
            >
              Email
            </span>
          </div>
        ) : (
          <div className="font-geo text-2xl">Tassyklamak</div>
        )}

        {activeTab === "phone" && (
          <>
            <div className="text-[16px] font-main">
              Telefon belgiňizi giriziň
            </div>
            <div
              className="flex items-center border-[1px] rounded-[10px] font-geo w-[80%]"
              style={{
                borderColor: "var(--color-borderGray)",
                color: "var(--color-text-primary)",
              }}
            >
              <div
                className="border-r-[1px] h-[100%] p-2"
                style={{ borderColor: "var(--color-borderGray)" }}
              >
                +993
              </div>
              <Input
                onChange={(e) => {
                  setLoginType("phone");
                  handleChange(e);
                }}
                maxLength={8}
                inputMode="numeric"
                pattern="[0-9]*"
                value={phone}
                type="tel"
                className="border-none outline-none"
                style={{
                  backgroundColor: "var(--color-modalBg)",
                  color: "var(--color-text-primary)",
                  boxShadow: "none",
                  outline: "none",
                }}
              />
            </div>
          </>
        )}
        {activeTab === "email" && (
          <>
            <div className="text-[16px] font-main">Email salgyňyzy giriziň</div>
            <Input
              onChange={(e) => {
                setLoginType("email");
                handleChange(e);
              }}
              placeholder="meselem@gmail.com"
              className="!w-[80%] rounded-[10px] outline-none"
              style={{
                borderColor: "var(--color-borderGray)",
                backgroundColor: "var(--color-modalBg)",
                color: "var(--color-text-primary)",
                boxShadow: "none",
                outline: "none",
                padding: "8px 11px",
              }}
              type="email"
            />
          </>
        )}

        {activeTab === "verify" && (
          <>
            <Input
              className="w-[80%] rounded-[10px] outline-none"
              style={{
                borderColor: "var(--color-borderGray)",
                backgroundColor: "var(--color-modalBg)",
                color: "var(--color-text-primary)",
                boxShadow: "none",
                outline: "none",
                padding: "8px 11px",
              }}
              maxLength={8}
              inputMode="numeric"
              pattern="[0-9]*"
              type="number"
              onChange={(e) => {
                const numericValue = parseInt(
                  e.target.value.replace(/\D/g, "")
                );
                setVerificationNumber(numericValue);
              }}
            />

            <div className="font-geo text-[18px]">{formatTime(countdown)}</div>
            {countdown === 0 && (
              <div
                onClick={handleLogin}
                className="font-main underline text-blue-400 cursor-pointer hover:opacity-75 duration-150"
              >
                SMS täzeden ugrat
              </div>
            )}
          </>
        )}

        <Button
          onClick={activeTab === "verify" ? handleVerify : handleLogin}
          className="!bg-primary !text-white hover:border-primary text-[16px] !font-geo h-[40px]"
        >
          {activeTab === "verify" ? "Tassykla" : "Tassyklama kody ugrat"}
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;
