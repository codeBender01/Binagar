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
  const [countdown, setCountdown] = useState(60);
  const [verificationNumber, setVerificationNumber] = useState<number | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setPhone(numericValue);
  };

  const handleLogin = async () => {
    const res = await login({ phoneNumber: "+993" + phone });
    if (res.data) {
      setActiveTab("verify");
    }
  };

  const handleVerify = async () => {
    const res = await verify({
      phoneNumber: "+993" + phone,
      code: verificationNumber as number,
    });

    if (res.data) {
      message.success("Success");
      setOpen(false);
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
    <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
      <div className="flex flex-col items-center gap-4">
        {activeTab !== "verify" ? (
          <div className="flex gap-4 items-center font-geo text-2xl">
            <span
              onClick={() => setActiveTab("phone")}
              className={`${
                activeTab === "phone" ? "bg-mainBlue text-white" : ""
              } hover:bg-mainBlue hover:text-white duration-200 cursor-pointer p-2 rounded-2xl`}
            >
              Telefon
            </span>
            <span>|</span>
            <span
              onClick={() => setActiveTab("email")}
              className={`${
                activeTab === "email" ? "bg-mainBlue text-white" : ""
              } hover:bg-mainBlue hover:text-white duration-200 cursor-pointer p-2 rounded-2xl`}
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
            <div className="flex items-center border-[1px] rounded-[10px] font-geo w-[80%]">
              <div className="border-r-[1px] h-[100%] p-2">+993</div>
              <Input
                onChange={handleChange}
                maxLength={8}
                inputMode="numeric"
                pattern="[0-9]*"
                value={phone}
                type="tel"
                className="border-none"
              />
            </div>
          </>
        )}
        {activeTab === "email" && (
          <>
            <div className="text-[16px] font-main">Email salgyňyzy giriziň</div>
            <Input
              placeholder="meselem@gmail.com"
              className="p-2 w-[80%] rounded-[10px] border-[#202123]"
              type="email"
            />
          </>
        )}

        {activeTab === "verify" && (
          <>
            <Input
              className="p-2 w-[80%] rounded-[10px] border-[#202123]"
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
          </>
        )}

        <Button
          onClick={activeTab === "verify" ? handleVerify : handleLogin}
          className="bg-mainBlue text-white text-[16px] font-geo h-[40px]"
        >
          {activeTab === "verify" ? "Ugrat" : "Tassyklama kody ugrat"}
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;
