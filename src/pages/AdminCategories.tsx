import { FC, useState } from "react";

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

import { FiSearch } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa6";
import { MdImageNotSupported, MdDeleteOutline, MdDelete } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { CgOptions } from "react-icons/cg";
import { IoAddSharp } from "react-icons/io5";

import "../antd.css";

const columnTitleClassname =
  "font-main text-mainBlack font-semibold text-sm2 uppercase";

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

const order = [
  {
    label: "A-Z",
    value: "asc",
  },
  {
    label: "Z-A",
    value: "desc",
  },
];

const CategoriesList: FC = () => {
  const [form] = Form.useForm();

  const [openAddCatModal, setOpenAddCatModal] = useState(false);
  const [optionModal, setOptionModal] = useState(false);
  const [openAddImage, setOpenAddImage] = useState(false);
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const [filters, setFilters] = useState<any>({
    q: "",
    page: 1,
  });
  const [category, setCategory] = useState<any>({
    title: "",
    language: "",
  });
  const [currentAct, setCurrentCat] = useState<any>({});

  const handleChange = ({
    fileList: newFileList,
  }: {
    fileList: UploadFile[];
  }) => setFileList(newFileList);

  const columns: TableProps["columns"] = [
    {
      title: <div className={columnTitleClassname}>Фото</div>,
      key: "image",
      dataIndex: "image",
      render: (val) => {
        return (
          <div className="w-[80px] h-[80px] bg-bgGray">
            {val ? (
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
        );
      },
    },
    {
      title: <div className={columnTitleClassname}>Наименование (ТМ)</div>,
      dataIndex: "nameTm",
      key: "nameTm",
      render: (val) => {
        return (
          <div className="text-secondaryBlack text-sm font-main font-medium">
            {val}
          </div>
        );
      },
    },
    {
      title: <div className={columnTitleClassname}>Наименование (РУ)</div>,
      key: "nameRu",
      dataIndex: "nameRu",
      render: (val) => {
        return (
          <div className="text-secondaryBlack text-sm font-main font-medium">
            {val}
          </div>
        );
      },
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
                setCurrentCat(val);
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
        title="Категории"
        isProducts={true}
        onClick={() => setOpenAddCatModal(true)}
        breadcrumbArr={["Dashboard", "Categories", "List"]}
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
            onChange={(e) => {
              setFilters({
                ...filters,
                q: e.target.value,
              });
            }}
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
            options={order}
            className="w-[20%] h-[30px]"
            suffixIcon={<FaCaretDown />}
            placeholder="Сортировка"
            onSelect={(val) => {
              setFilters({
                ...filters,
                order: val,
              });
            }}
          />
        </div>
        <Table
          columns={columns}
          dataSource={[]}
          pagination={{
            pageSize: 10,
            total: 0,
            onChange(page, pageSize) {
              setFilters({
                ...filters,
                page: page,
                take: pageSize,
              });
            },
          }}
        />

        <AddItemModal open={openAddCatModal} setOpen={setOpenAddCatModal}>
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
            >
              <Form.Item name="title" label="Имя" className="w-[100%]">
                <Input
                  onChange={(e) => {
                    setCategory({
                      ...category,
                      title: e.target.value,
                    });
                  }}
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
              customRequest={async () => {
                console.log(fileList);
                const formData = new FormData();
                formData.append(
                  "image",
                  fileList[fileList.length - 1].originFileObj as Blob
                );
              }}
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
                  value: currentAct.nameTm,
                },
                {
                  name: ["titleRu"],
                  value: currentAct.nameRu,
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
                      setCurrentCat({
                        ...currentAct,
                        nameTm: e.target.value,
                      });
                    }}
                    className="border-b1 border-greenBlue"
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
                      setCurrentCat({
                        ...currentAct,
                        nameRu: e.target.value,
                      });
                    }}
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
    </div>
  );
};

export default CategoriesList;
