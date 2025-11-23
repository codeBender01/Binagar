import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Radio, RadioChangeEvent, Input } from "antd";

import drill from "../assets/drill.png";

import { IoIosAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

import "../antd.css";
import { RootState } from "../store";
import { BasketItem, removeFromBasket, updateAmount } from "../store/basketSlice";

const Basket: FC = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const [paymentType, setPaymentType] = useState("cash");

  const columns = [
    {
      title: "Harydyň suraty",
      dataIndex: "images",
      key: "product",
      render: (val: string[]) => {
        return (
          <div className="w-[120px] h-[120px]">
            <img src={val && val.length > 0 ? val[0] : drill} alt="" className="h-[100%] w-[100%] object-contain" />
          </div>
        );
      },
    },
    {
      title: "Harydyň ady",
      dataIndex: "name_tm",
      key: "productName",
      render: (val: string) => {
        return <div className="font-geo text-nowrap">{val}</div>;
      },
    },
    {
      title: "Bahasy",
      dataIndex: "price",
      key: "price",
      render: (val: string, record: BasketItem) => {
        return <div className="font-geo">{val} {record.currency}</div>;
      },
    },
    {
      title: "Sany",
      key: "amount",
      width: 160,
      render: () => null, // Will be overridden in JSX
    },
    {
      title: "Umumy",
      key: "sum",
      dataIndex: "sum",
      render: () => null, // Will be overridden in JSX
    },
    {
      title: "Aýyrmak",
      key: "delete",
      render: () => null, // Will be overridden in JSX
    },
  ];

  const handleAmountChange = (itemId: string, delta: number) => {
    dispatch(updateAmount({ id: itemId, delta }));
  };

  const handleDelete = (itemId: string) => {
    dispatch(removeFromBasket(itemId));
  };

  const totalSum = basketItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(" tmt", "").replace(/\s/g, ""));
    return sum + price * item.amount;
  }, 0);

  return (
    <div className="w-[90%] mx-auto">
      <div className="mt-12 font-geo font-light">
        <span className="text-gray">Home</span> /{" "}
        <span className="text-gray">Category</span> / Basket
      </div>
      <div
        className="text-[32px] md:text-[48px] md2:mb-4 font-bold font-geo"
        style={{ color: "var(--color-text-primary)" }}
      >
        Basket
      </div>

      <div className="flex flex-col gap-4 lg2:gap-0 lg2:flex-row justify-between">
        <div className="w-[100%] lg2:w-[70%]">
          <div
            className="text-[18px] font-main"
            style={{ color: "var(--color-text-primary)" }}
          >
            Harytlar
          </div>

          {/* Mobile Card View - shown on screens smaller than lg */}
          <div className="lg:hidden mt-6 flex flex-col gap-4">
            {basketItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-appBarColor rounded-[20px] p-4 flex gap-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  <div className="w-[100px] h-[100px] flex-shrink-0">
                    <img
                      src={item.images && item.images.length > 0 ? item.images[0] : drill}
                      alt={item.name_tm}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-geo font-semibold text-[16px] mb-1">
                        {item.name_tm}
                      </div>
                      <div
                        className="font-geo text-[14px] mb-2"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {item.price} {item.currency}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="min-w-[100px] flex rounded-full border-[1px] border-borderGray items-center justify-between p-2">
                        <div
                          onClick={() => {
                            if (item.amount > 1) {
                              handleAmountChange(item.id || "", -1);
                            }
                          }}
                          className={`bg-mainBlue text-white rounded-full h-[100%] p-1 text-md hover:opacity-80 duration-200 cursor-pointer ${
                            item.amount === 1 ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <AiOutlineMinus />
                        </div>
                        <div
                          className="font-geo px-2"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {item.amount}
                        </div>
                        <div
                          onClick={() => handleAmountChange(item.id || "", 1)}
                          className="bg-mainBlue text-white rounded-full h-[100%] p-1 text-md hover:opacity-80 duration-200 cursor-pointer"
                        >
                          <IoIosAdd />
                        </div>
                      </div>
                      <div
                        onClick={() => handleDelete(item.id || "")}
                        className="text-red border-[1px] rounded-[4px] border-borderGray w-fit text-[22px] p-2 hover:opacity-80 duration-200 cursor-pointer ml-2"
                      >
                        <MdDeleteOutline />
                      </div>
                    </div>
                    <div className="mt-2 font-geo font-semibold">
                      Umumy:{" "}
                      {parseFloat(
                        item.price.replace(" tmt", "").replace(/\s/g, "")
                      ) * item.amount}{" "}
                      tmt
                    </div>
                  </div>
                </div>
              );
            })}
            {basketItems.length === 0 && (
              <div className="text-center py-8 font-geo text-gray">
                Sebediňiz boş
              </div>
            )}
          </div>

          {/* Desktop Table View - shown on lg and larger screens */}
          <div className="hidden lg:block">
            <Table
              scroll={{
                x: true,
              }}
              className="w-[100%] mt-6 font-geo"
              columns={columns.map((col) => {
                if (col.key === "amount") {
                  return {
                    ...col,
                    render: (_: any, record: BasketItem) => {
                      return (
                        <div className="min-w-[120px] flex rounded-full border-[1px] border-borderGray items-center justify-between p-2 font-geo">
                          <div
                            onClick={() => {
                              if (record.amount > 1) {
                                handleAmountChange(record.id || "", -1);
                              }
                            }}
                            className={`bg-mainBlue text-white rounded-full h-[100%] p-1 text-md hover:opacity-80 duration-200 cursor-pointer ${
                              record.amount === 1
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                          >
                            <AiOutlineMinus />
                          </div>
                          <div
                            style={{ color: "var(--color-text-primary)" }}
                            className="font-geo"
                          >
                            {record.amount}
                          </div>
                          <div
                            onClick={() =>
                              handleAmountChange(record.id || "", 1)
                            }
                            className="bg-mainBlue text-white rounded-full h-[100%] p-1 text-md hover:opacity-80 duration-200 cursor-pointer"
                          >
                            <IoIosAdd />
                          </div>
                        </div>
                      );
                    },
                  };
                }
                if (col.key === "delete") {
                  return {
                    ...col,
                    render: (_: any, record: BasketItem) => {
                      return (
                        <div
                          onClick={() => handleDelete(record.id || "")}
                          className="text-red border-[1px] rounded-[4px] border-borderGray w-fit text-[22px] p-1 hover:opacity-80 duration-200 cursor-pointer"
                        >
                          <MdDeleteOutline />
                        </div>
                      );
                    },
                  };
                }
                if (col.key === "sum") {
                  return {
                    ...col,
                    render: (_val: string, record: BasketItem) => {
                      const price = parseFloat(
                        record.price.replace(" tmt", "").replace(/\s/g, "")
                      );
                      return (
                        <div className="font-geo">{price * record.amount} tmt</div>
                      );
                    },
                  };
                }
                return col;
              })}
              dataSource={basketItems}
              pagination={false}
              rowKey="id"
            />
          </div>

          <div
            className="flex justify-between bg-appBarColor px-4 py-2 mt-4 lg:mt-0"
            style={{ color: "var(--color-text-primary)" }}
          >
            <div className="text-[18px] font-main">Umumy:</div>
            <div className="text-[18px] font-main">{totalSum} tmt</div>
          </div>
        </div>

        <div
          className="w-[100%] lg2:w-[25%] bg-appBarColor self-start border-none lg2:border-[1px] border-borderGray rounded-none lg2:rounded-4xl py-4 px-4 lg2:px-8 mt-4 lg2:mt-0"
          style={{ color: "var(--color-text-primary)" }}
        >
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
                label: (
                  <div
                    className="font-main"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Nagt
                  </div>
                ),
              },
              {
                value: "card",
                label: (
                  <div
                    className="font-main"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Kart üsti
                  </div>
                ),
              },
            ]}
          ></Radio.Group>
        </div>
      </div>

      <div className="w-[100%] lg2:w-[70%] bg-appBarColor flex flex-col gap-4 mt-8 py-4 px-4">
        <div
          className="text-[20px] font-bold font-geo"
          style={{ color: "var(--color-text-primary)" }}
        >
          Müşderi maglumaty
        </div>

        <div className=" flex items-center flex-wrap gap-2">
          <Input
            placeholder="Doly adyňyz"
            className="h-[48px] w-[100%] sm:w-[30%]"
          />
          <Input
            placeholder="Telefon belgiňiz"
            className="h-[48px] w-[100%] sm:w-[30%]"
          />
          <Input
            placeholder="Salgyňyz"
            className="h-[48px] w-[100%] sm:w-[30%]"
          />
          <Input.TextArea
            placeholder="Goşmaça bellik"
            className="w-[100%] sm:w-[50%]"
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
