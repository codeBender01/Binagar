import { FC, useEffect, useState } from "react";

import ListHeader from "../components/ListHeader";
import {
  Table,
  TableProps,
  Input,
  Select,
  Form,
  Button,
  Upload,
  UploadFile,
} from "antd";
import AddItemModal from "../components/AddItemModal";

// import languages from "../pageData/languages";

import { FiSearch } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import { MdImageNotSupported, MdDeleteOutline, MdDelete } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";

// import { CategoriesFilter } from "../interfaces/categories";
// import { NewProduct } from "../interfaces/products.interface";
// import { Media } from "../interfaces/media.interface";

import "../antd.css";

const columnTitleClassname =
  "font-main text-mainBlack font-semibold text-sm2 uppercase";
const rowValueClassname = "text-secondaryBlack text-sm font-main font-normal";

const options = [
  {
    label: "Новые",
    value: "new",
  },
  {
    label: "Старые",
    value: "old",
  },
];

const InstOpts = [
  {
    label: "Да",
    value: true,
  },
  {
    label: "Нет",
    value: false,
  },
];

const ProductsList: FC = () => {
  const [form] = Form.useForm();

  const [addProductModal, setAddProductModal] = useState(false);
  const [openAddImage, setOpenAddImage] = useState(false);
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [optionModal, setOptionModal] = useState(false);
  const [currentProd, setCurrentProd] = useState<any>({});
  const [filters, setFilters] = useState<any>({
    q: "",
    page: 1,
  });
  const [option, setNewOption] = useState({
    title: "",
    language: "",
    description: "",
  });
  const [newProduct, setNewProduct] = useState<any>({
    barcode: "",
    sku: "",
    quantity: null,
    installmentPurchase: false,
    installmentPrice: null,
    price: null,
    categoryId: "",
    shopId: "",
    options: [],
  });

  useEffect(() => {
    if (
      option.title !== "" &&
      option.description !== "" &&
      option.language !== ""
    ) {
      setNewProduct({
        ...newProduct,
        options: [option],
      });
    }
  }, [option]);

  const handleCreateProduct = async () => {};

  const handleChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => setFileList(newFileList);

  const columns: TableProps["columns"] = [
    {
      title: <div className={columnTitleClassname}>Наименование</div>,
      key: "name",
      render: (val) => {
        return (
          <div className="flex items-center gap-[10px] justify-between">
            <div className="w-[80px] h-[80px] bg-bgGray">
              {val.img ? (
                <img
                  src={val}
                  alt="product"
                  className="w-[100%] h-[100%] object-cover"
                />
              ) : (
                <div className="h-[100%] w-[100%] flex items-center justify-center text-[22px]">
                  <MdImageNotSupported />
                </div>
              )}
            </div>
            <div className="text-secondaryBlack text-sm font-main font-medium">
              {val.nameTm}
            </div>
          </div>
        );
      },
    },
    {
      title: <div className={columnTitleClassname}>Количество</div>,
      dataIndex: "quantity",
      key: "quantity",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>Цена</div>,
      dataIndex: "price",
      key: "price",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>sku</div>,
      dataIndex: "sku",
      key: "sku",
      render: (val) => <div className={rowValueClassname}>{val}</div>,
    },
    {
      title: <div className={columnTitleClassname}>Barcode</div>,
      dataIndex: "barcode",
      key: "barcode",
      render: (val) => (
        <div className="text-altBlack rounded-pill py-1 text-center uppercase">
          {val}
        </div>
      ),
    },
    {
      title: <div className={columnTitleClassname}>Действия</div>,
      key: "actions",
      render: (val) => {
        return (
          <div className="flex items-center gap-4">
            <div
              onClick={() => {
                setOptionModal(true);
                setCurrentProd(val);
              }}
              className="text-altBlack cursor-pointer hover:opacity-80 duration-200"
            >
              <CgOptions size={22} />
            </div>
            <div
              onClick={() => {
                setOpenAddImage(true);
                const fList = val.medias.map((img: any) => {
                  return {
                    id: img.id,
                    uid: img.id,
                    name: img.originalName,
                    status: "done",
                    url: img.filePath,
                  };
                });
                setFileList(fList);
              }}
              style={{ color: 'var(--color-warning)' }}
              className="cursor-pointer hover:opacity-80 duration-200"
            >
              <LuImagePlus size={22} />
            </div>
            <div className="text-deleteRed cursor-pointer hover:opacity-80 duration-200">
              <MdDeleteOutline size={22} />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col px-[64px] pt-[80px] pb-4">
      <ListHeader
        onClick={() => setAddProductModal(true)}
        title="Продукты"
        isProducts={true}
        path="/admin/products/add"
      />
      <div
        className="mt-[40px] px-4 py-2 rounded-[20px] "
        style={{
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div className="my-[24px] flex justify-between items-center">
          <Input
            prefix={<FiSearch size={18} />}
            placeholder="Поиск товаров"
            className="py-[14px] w-[100%]"
          />
        </div>
        <div className="mb-[24px] flex items-center gap-4">
          <Select
            options={options}
            className="w-[20%] h-[30px]"
            suffixIcon={<FaCaretDown />}
            placeholder="Категория"
          />
          <Select
            options={options}
            className="w-[20%] h-[30px]"
            suffixIcon={<FaCaretDown />}
            placeholder="Статус"
          />
          <Select
            options={options}
            className="w-[20%] h-[30px]"
            suffixIcon={<FaCaretDown />}
            placeholder="Фильтр"
          />
        </div>
        <Table
          columns={columns}
          dataSource={[]}
          pagination={{
            pageSize: 10,
            total: 0,
            showSizeChanger: false,
            onChange(page, pageSize) {
              setFilters({
                ...filters,
                page: page,
                take: pageSize,
              });
            },
          }}
        />
      </div>

      <AddItemModal open={addProductModal} setOpen={setAddProductModal}>
        <div>
          <div className="font-secondary font-bold text-[20px]">
            Добавить категорию
          </div>
          <Form
            layout="vertical"
            form={form}
            className="flex flex-wrap items-center gap-2 mt-4 w-[100%] justify-between"
            wrapperCol={{
              span: 32,
            }}
            onFinish={handleCreateProduct}
          >
            <Form.Item name="title" label="Имя" className="w-[100%]">
              <Input
                onChange={(e) => {
                  setNewOption({
                    ...option,
                    title: e.target.value,
                  });
                }}
              />
            </Form.Item>
            <Form.Item name="owner" label="Описание" className="w-[100%]">
              <Input.TextArea
                onChange={(e) => {
                  setNewOption({
                    ...option,
                    description: e.target.value,
                  });
                }}
                rows={3}
              />
            </Form.Item>
            {/* <Form.Item name="region" label="Язык" className="w-[100%]">
              <Select
                onSelect={(e) => {
                  setNewOption({
                    ...option,
                    language: e,
                  });
                }}
                options={languages}
              />
            </Form.Item> */}
            <Form.Item name="city" label="Barcode" className="w-[100%]">
              <Input
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    barcode: e.target.value,
                  });
                }}
                type="numeric"
              />
            </Form.Item>
            <Form.Item name="address" label="sku" className="w-[100%]">
              <Input
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    sku: e.target.value,
                  });
                }}
                type="numeric"
              />
            </Form.Item>
            <Form.Item name="email" label="Цена" className="w-[100%]">
              <Input
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    price: parseInt(e.target.value),
                  });
                }}
                type="number"
              />
            </Form.Item>
            <Form.Item name="quantity" label="Количество" className="w-[100%]">
              <Input
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    quantity: parseInt(e.target.value),
                  });
                }}
                type="number"
              />
            </Form.Item>
            <Form.Item
              name="username"
              label="Цена рассрочки"
              className="w-[100%]"
            >
              <Input
                onChange={(e) => {
                  setNewProduct({
                    ...newProduct,
                    installmentPrice: parseInt(e.target.value),
                  });
                }}
                type="number"
              />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Доступно для рассрочки"
              className="w-[100%]"
            >
              <Select
                onSelect={(e) => {
                  setNewProduct({
                    ...newProduct,
                    installmentPurchase: e,
                  });
                }}
                options={InstOpts}
              />
            </Form.Item>

            <Form.Item className="ml-auto w-fit">
              <Button
                htmlType="submit"
                className="bg-purple text-[16px] text-white font-secondary"
              >
                Добавить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </AddItemModal>

      <AddItemModal open={openAddImage} setOpen={setOpenAddImage}>
        <div className="flex items-center justify-center gap-4 flex-col">
          <Upload
            fileList={fileList}
            beforeUpload={() => {}}
            onChange={handleChange}
            listType="picture-card"
          >
            {fileList.length > 0 ? null : (
              <div className="h-[120px] w-[120px] border-dashed border-[1px] rounded-md flex items-center justify-center text-[22px] cursor-pointer duration-150 hover:opacity-85">
                <LuImagePlus />
              </div>
            )}
          </Upload>
        </div>
      </AddItemModal>

      <AddItemModal open={optionModal} setOpen={setOptionModal}>
        <div>
          <div className="font-secondary font-bold text-[20px]">
            Добавить имя категории
          </div>
          <Form
            className="flex flex-wrap flex-col items-center gap-2 mt-4 w-[100%]"
            layout="vertical"
            wrapperCol={{
              span: 32,
            }}
            labelWrap={false}
            fields={[
              {
                name: ["titleTm"],
                value: currentProd.nameTm,
              },
              {
                name: ["titleRu"],
                value: currentProd.nameRu,
              },
              {
                name: ["descTm"],
                value: currentProd.descTm,
              },
              {
                name: ["descRu"],
                value: currentProd.descRu,
              },
            ]}
          >
            <div className="w-[100%]">
              <Form.Item
                name="titleTm"
                className="w-[100%] mb-2"
                label={
                  <label className="font-main text-sm text-blueish p-0">
                    Title TM
                  </label>
                }
                required
              >
                <Input
                  onChange={(e) => {
                    setCurrentProd({
                      ...currentProd,
                      nameTm: e.target.value,
                    });
                  }}
                  className="border-b1 border-greenBlue"
                />
              </Form.Item>
              <Form.Item
                name="descTm"
                className="w-[100%] mb-2"
                label={
                  <label className="font-main text-sm text-blueish p-0">
                    Desc TM
                  </label>
                }
                required
              >
                <Input.TextArea
                  onChange={(e) => {
                    setCurrentProd({
                      ...currentProd,
                      descTm: e.target.value,
                    });
                  }}
                  className="border-b1 border-greenBlue"
                  rows={3}
                />
              </Form.Item>
              <div className="flex gap-2 items-center">
                <Button className="bg-purple text-white text-sm">
                  <IoAddSharp />
                  Add(TM)
                </Button>

                <Button className="bg-deleteRed text-white text-sm">
                  <MdDelete />
                  Delete(TM)
                </Button>
              </div>
            </div>
            <div className="w-[100%]">
              <Form.Item
                name="titleRu"
                className="w-[100%] mb-2"
                label={
                  <label className="font-main text-sm text-blueish p-0">
                    Title Ru
                  </label>
                }
                required
              >
                <Input
                  onChange={(e) => {
                    setCurrentProd({
                      ...currentProd,
                      nameRu: e.target.value,
                    });
                  }}
                  className="border-b1 border-greenBlue"
                />
              </Form.Item>
              <Form.Item
                name="descRu"
                className="w-[100%] mb-2"
                label={
                  <label className="font-main text-sm text-blueish p-0">
                    Title Ru
                  </label>
                }
                required
              >
                <Input.TextArea
                  onChange={(e) => {
                    setCurrentProd({
                      ...currentProd,
                      descRu: e.target.value,
                    });
                  }}
                  rows={3}
                  className="border-b1 border-greenBlue"
                />
              </Form.Item>
              <div className="flex gap-2 item-center">
                <Button className="bg-purple text-white text-sm">
                  <IoAddSharp />
                  Add(RU)
                </Button>

                <Button className="bg-deleteRed text-white text-sm">
                  <MdDelete />
                  Delete(RU)
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </AddItemModal>
    </div>
  );
};

export default ProductsList;
