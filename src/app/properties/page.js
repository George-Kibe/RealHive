// import "antd/dist/antd.min.css";
"use client"
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PropertiesGridContainer from "@/components/properties-grid-container";

const PropertiesGridView = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <div className="relative leading-[72px] font-semibold">
            Properties
          </div>
          <a className="[text-decoration:none] relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </a>
        </div>
      </div>
      <div className="self-stretch flex flex-col pt-16 px-0 pb-2 items-center justify-start gap-[95px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="relative w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="relative w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
                  ].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
              trigger={["hover"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <PropertiesGridContainer />
        <div className="flex flex-row items-end justify-center gap-[8px]">
          <button className="cursor-pointer [border:none] p-2.5 bg-primary-50 rounded flex flex-row items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-500 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-gray-white text-center flex items-end justify-center w-[26px]">
              1
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              2
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              3
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              ...
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[9px] bg-primary-50 rounded-10xs flex flex-col items-start justify-start">
            <div className="relative text-base leading-[24px] font-semibold font-body-regular-600 text-primary-500 text-center flex items-end justify-center w-[26px]">
              54
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-2.5 bg-primary-500 rounded flex flex-row items-start justify-start">
            <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesGridView;
