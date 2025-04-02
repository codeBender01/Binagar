import { FC, useState } from "react";

import { Form, Input, Button } from "antd";

import { IoMdSwitch } from "react-icons/io";

import gradient from "../assets/gradient.png";
import logo from "../assets/logo.png";

import "../antd.css";

interface AdminCreds {
  username: string;
  password: string;
}

const AdminLogin: FC = () => {
  const [adminCredentials, setAdminCreds] = useState<AdminCreds>({
    username: "",
    password: "",
  });

  //   useEffect(() => {
  //     if (res.isSuccess) {
  //       navigate("/admin");
  //       messageApi.success("Логин успешен!");
  //     } else if (res.isError) {
  //       messageApi.error("Ошибка!");
  //     }
  //   }, [res]);

  //   const handleLogin = async () => {
  //     console.log("res");
  //     const res = await login(adminCredentials).unwrap();
  //     cookies.set("accessToken", res?.accessToken);
  //     cookies.set("refreshToken", res?.refreshToken);
  //   };

  return (
    <div
      className="w-[100%] h-[100vh] max-h-[100vh] flex items-center"
      id="admin-login"
    >
      <div
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "cover",
        }}
        className="w-[60%] h-[100%] bg-mainBlack flex justify-center flex-col pl-16"
      >
        <h1 className="text-lg text-white font-secondary font-bold">
          Türkmen binagär
        </h1>
        <p className="text-textGray font-main font-normal text-normal mt-[10px]">
          Admin sahypasy
        </p>
      </div>
      <div className="w-[40%] flex flex-col px-16">
        <div className="flex items-center gap-2 mb-[70px]">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="text-secondaryBlack text-[24px] font-bold">
            Girmek
          </div>
        </div>
        <Form layout="vertical" className="mt-[32px]">
          <Form.Item name="login">
            <Input
              onChange={(e) => {
                setAdminCreds({
                  ...adminCredentials,
                  username: e.target.value,
                });
              }}
              className="h-[50px] font-main"
              placeholder="Логин"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              onChange={(e) => {
                setAdminCreds({
                  ...adminCredentials,
                  password: e.target.value,
                });
              }}
              className="h-[50px] font-main"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item name="submit">
            <Button
              htmlType="submit"
              //   loading={res.isLoading}
              className="bg-purple text-white w-[100%] font-semibold font-main text-sm py-5 rounded-[12px]"
            >
              Dowam etmek
            </Button>
          </Form.Item>
        </Form>

        {/* <div className="text-purple font-medium font-main text-sm hover:opacity-85 duration-150 cursor-pointer">
          Забыли пароль?
        </div> */}

        <div className="absolute bottom-8 right-8 text-white bg-purple w-[44px] h-[44px] rounded-round flex items-center justify-center cursor-pointer hover:text-purple hover:bg-white duration-200 hover:border-[1px] border-purple">
          <IoMdSwitch size={30} />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
