import { FC, useState } from "react";

import { Table, Radio, RadioChangeEvent, Input } from "antd";

import drill from "../assets/drill.png";

import { IoIosAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

import "../antd.css";

const Basket: FC = () => {
  const [amount, setAmount] = useState(1);
  const [paymentType, setPaymentType] = useState("cash");

  const columns = [
    {
      title: "Harydyň suraty",
      dataIndex: "productImg",
      key: "product",
      render: (val: string) => {
        return (
          <div className="w-[120px] h-[120px]">
            <img src={val} alt="" className="h-[100%] w-[100%]" />
          </div>
        );
      },
    },
    {
      title: "Harydyň ady",
      dataIndex: "productName",
      key: "productName",
      render: (val: string) => {
        return <div className="font-geo">{val}</div>;
      },
    },
    {
      title: "Bahasy",
      dataIndex: "price",
      key: "price",
      render: (val: string) => {
        return <div className="font-geo">{val}</div>;
      },
    },
    {
      title: "Sany",
      key: "amount",
      render: () => {
        return (
          <div className="flex rounded-full border-[1px] border-borderGray items-center justify-between p-2 fotn-geo">
            <div
              onClick={() => {
                if (amount === 1) {
                  return;
                }
                setAmount((prev) => prev - 1);
              }}
              className="bg-mainBlue text-white rounded-full h-[100%] p-1 text-md hover:opacity-80 duration-200"
            >
              <AiOutlineMinus />
            </div>
            <div>{amount}</div>
            <div
              onClick={() => {
                setAmount((prev) => prev + 1);
              }}
              className="bg-mainBlue text-white rounded-full h-[100%] p-1 text-md hover:opacity-80 duration-200"
            >
              <IoIosAdd />
            </div>
          </div>
        );
      },
    },
    {
      title: "Umumy",
      key: "sum",
      dataIndex: "sum",
      render: (val: string) => {
        return <div className="font-geo">{val}</div>;
      },
    },
    {
      title: "Aýyrmak",
      key: "delete",
      render: () => {
        return (
          <div className="text-red border-[1px] rounded-[4px] border-borderGray w-fit text-[22px] p-1 hover:opacity-80 duration-200 cursor-pointer">
            <MdDeleteOutline />
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      productImg: drill,
      productName: "Product Tittle",
      price: "500 tmt",
      sum: "1000 tmt",
    },
    {
      productImg: drill,
      productName: "Product Tittle",
      price: "500 tmt",
      sum: "1000 tmt",
    },
  ];

  return (
    <div className="w-[90%] mx-auto">
      <div className="mt-12 font-geo font-light">
        <span className="text-gray">Home</span> /{" "}
        <span className="text-gray">Category</span> / Basket
      </div>
      <div className="text-[48px] text-textBlack font-bold font-geo">
        Basket
      </div>

      <div className="flex justify-between">
        <div className="w-[70%]">
          <div className="text-[18px] text-textBlack font-main">Harytlar</div>
          <Table
            className="w-[100%] mt-6 font-geo"
            columns={columns}
            dataSource={rows}
            pagination={false}
          />
          <div className="flex justify-between bg-white px-4 py-2">
            <div className="text-[18px] text-textBlack font-main">Umumy:</div>
            <div className="text-[18px] text-textBlack font-main">1500tmt</div>
          </div>
        </div>

        <div className="w-[25%] bg-white self-start border-[1px] border-borderGray rounded-4xl py-4 px-8">
          <div className="text-[22px] font-geo">Töleg görnüşi</div>
          <Radio.Group
            className="mt-2 flex-col flex gap-2"
            onChange={(e: RadioChangeEvent) => {
              setPaymentType(e.target.value);
            }}
            value={paymentType}
            options={[
              {
                value: "cash",
                label: <div className=" font-main">Nagt</div>,
              },
              {
                value: "card",
                label: <div className=" font-main">Kart üsti</div>,
              },
            ]}
          ></Radio.Group>
        </div>
      </div>

      <div className="w-[70%] bg-white flex flex-col gap-4 mt-8 py-4 px-4">
        <div className="text-[20px] text-textBlack font-bold font-geo ">
          Müşderi maglumaty
        </div>

        <div className=" flex items-center flex-wrap gap-2  ">
          <Input placeholder="Doly adyňyz" className="h-[48px] w-[30%]" />
          <Input placeholder="Telefon belgiňiz" className="h-[48px] w-[30%]" />
          <Input placeholder="Salgyňyz" className="h-[48px] w-[30%]" />
          <Input.TextArea
            placeholder="Goşmaça bellik"
            className="w-[50%]"
            rows={4}
          />
        </div>

        <div className="rounded-full bg-mainBlue flex items-center gap-[12px] w-fit py-2 px-3 text-white font-geo group hover:bg-white hover:text-mainBlue cursor-pointer border-[1px] hover:border-mainBlue duration-200">
          <div>Sargyt etmek</div>
          <div className="rounded-full bg-white text-mainBlue p-1 group-hover:text-white group-hover:bg-mainBlue duration-200">
            <IoIosArrowRoundForward size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
