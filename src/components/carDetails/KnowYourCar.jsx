/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CardUi from "../../ui/CardUi";
import { IoLogoModelS } from "react-icons/io";
import { GrServices } from "react-icons/gr";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaRegWindowMaximize } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { AiFillInsurance } from "react-icons/ai";
import { FaKey } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { MdDriveEta } from "react-icons/md";
import { IoIosMan } from "react-icons/io";

const KnowYourCar = ({
  fuelType,
  registration,
  ownerSerial,
  transmission,
  year,
  carInsurance,
  kmDriven,
  insurancedate,
  carInsuranceType,
  insuranceType,
}) => {
  // console.log(
  //   fuelType,
  //   registration,
  //   ownerSerial,
  //   transmission,
  //   year,
  //   carInsurance,
  //   kmDriven,
  //   insurancedate,
  //   carInsuranceType,
  //   insuranceType
  // );
  return (
    <>
      <p className="text-2xl text-black font-bold md:ml-12 my-3  font-[Merriweather]">
        Know your Car
      </p>
      <div className="border shadow-xl items-center mx-auto w-full md:w-full">
        <CardUi>
          <div className="w-full h-max md:w-full">
            <div className="w-full grid grid-cols-1 ml-5 md:ml-0 gap-y-4 md:grid md:grid-cols-3 md:gap-y-8 mt-5 px-8">
              <div className="flex items-center gap-5">
                <div>
                  <FaRegWindowMaximize className="w-5 h-5"style={{ color: '#6EC207' }}  />
                </div>
                <div className="flex flex-col">
                  <div className="font-[sourceSans]">Reg Number</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans] uppercase">
                    {registration}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <FaCalendarDay className="w-5 h-5" style={{ color: '#6EC207' }}  />
                </div>
                <div className="flex flex-col">
                  <div className="font-[sourceSans]">Make Year</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                    {year}
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center gap-5 mt-6">
                <div>
                  <FaRoad className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[sourceSans]">Reg Number</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                    ABC-1234567
                  </div>
                </div>
              </div> */}
              <div className="flex items-center gap-5">
                <div>
                  <BsFillFuelPumpFill className="w-5 h-5" style={{ color: '#6EC207' }}  />
                </div>
                <div className="flex flex-col">
                  <div className="font-[sourceSans]">Fuel Type</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                    {fuelType}
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center gap-5">
                <div>
                  <PiEngineFill className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[sourceSans]">Engine Capacity</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                    1551 cc
                  </div>
                </div>
              </div> */}

              {/* <div className="flex items-center gap-5 mt-6">
                <div>
                  <FaKey className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-[sourceSans]">Spare Key</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                    Yes
                  </div>
                </div>
              </div> */}

              <div className="flex items-center gap-5">
                <div>
                  <GiCarWheel className="w-5 h-5" style={{ color: '#6EC207' }}   />
                </div>
                <div className="flex flex-col">
                  <div className="font-[sourceSans]">Transmission</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                    {transmission}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <MdDriveEta className="w-5 h-5" style={{ color: '#6EC207' }}  />
                </div>
                <div className="flex flex-col">
                  <div className="font-[sourceSans]">KM Driven</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                    {kmDriven}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <IoIosMan className="w-5 h-5" style={{ color: '#6EC207' }}  />
                </div>
                <div className="flex flex-col ">
                  <div className="font-[sourceSans]">Ownership</div>
                  <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                    {ownerSerial}
                  </div>
                </div>
              </div>
              {carInsurance && (
                <div className="flex items-center gap-5">
                  <div>
                    <AiFillInsurance className="w-5 h-5" style={{ color: '#6EC207' }}  />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-[sourceSans]">Insurance Type</div>
                    <div className="font-bold text-black text-sm mt-2 font-[sourceSans]">
                      {carInsuranceType}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <br />
            {/* <div className="md:flex md:justify-between pl-4 align-middle items-center">
            <div className="flex items-center gap-6 md:mr-6">
              <div className="bg-blue-50 py-3 md:px-2 rounded-xl">
                <IoLogoModelS className="w-12 h-8" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-black font-[sourceSans] text-xl">
                  Top Model
                </div>
                <div className="font-[sourceSans] text-lg">
                  Top varient that is equipped with all features of the model
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 mr-6 mt-11 md:mt-0">
              <div className="bg-blue-50 py-3 px-2 rounded-xl">
                <GrServices className="w-12 h-8" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-black font-[sourceSans] text-xl">
                  Regularly Serviced
                </div>
                <div className="font-[sourceSans] text-lg">
                  Top varient that is equipped with all features of the model
                </div>
              </div>
            </div>
          </div> 
          <div className="flex items-center gap-6 mt-11 pl-4">
            <div className="bg-blue-50 py-3 px-2 rounded-xl">
              <MdOutlineAirlineSeatReclineExtra className="w-12 h-8" />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-black font-[sourceSans] text-xl">
                Standard Safty Features
              </div>
              <div className="font-[sourceSans] text-lg">
                Top varient that is equipped with all <br />
                features of the model
              </div>
            </div>
          </div> */}
            <div className="font-[sourceSans] text-lg"></div>
          </div>
        </CardUi>
      </div>
    </>
  );
};

export default KnowYourCar;
