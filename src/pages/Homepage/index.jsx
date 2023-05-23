import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-cairo items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-blue_gray_900 flex flex-1 flex-col items-center justify-start pt-[13px] w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[85%] md:w-full">
                <div className="flex flex-row gap-[21px] items-start justify-start w-[9%] md:w-full">
                  <Img
                    src="images/img_telephonecall1.svg"
                    className="h-6 mt-1 w-6"
                    alt="telephonecallOne"
                  />
                  <Text className="text-blue_gray_50" size="xs">
                    +12 345 6789
                  </Text>
                </div>
                <div className="flex flex-row gap-[21px] items-center justify-center ml-14 md:ml-[0] w-[12%] md:w-full">
                  <Img
                    src="images/img_inbox21.svg"
                    className="h-6 w-6"
                    alt="inboxTwentyOne"
                  />
                  <Text className="text-blue_gray_50" size="xs">
                    support@elmna.com
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[925px] text-blue_gray_50"
                  size="xs"
                >
                  Help Center
                </Text>
                <Text className="ml-5 md:ml-[0] text-blue_gray_50" size="xs">
                  Blog
                </Text>
                <a
                  href="javascript:"
                  className="ml-5 md:ml-[0] text-blue_gray_50"
                >
                  <Text size="xs">Career</Text>
                </a>
                <Text
                  className="!font-bold md:ml-[0] ml-[68px] text-blue_gray_50"
                  as="h6"
                  size="xs"
                >
                  EN
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[11px] ml-3 md:ml-[0] md:mt-0 mt-[9px]"
                  alt="arrowdown"
                />
              </div>
              <Line className="bg-blue_gray_600 h-px w-full" />
            </div>
          </div>
          <div className="bg-blue_gray_700 flex flex-1 flex-col items-center justify-end pt-[29px] w-full">
            <div className="flex flex-col gap-7 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[85%] md:w-full">
                <Img
                  src="images/img_logo.svg"
                  className="h-[72px]"
                  alt="logo"
                />
                <ul className="flex md:flex-col flex-row md:hidden items-start justify-start md:ml-[0] ml-[117px] w-[56%] md:w-full common-row-list">
                  <li>
                    <a className="mb-0.5 text-blue_gray_50">
                      <Text
                        className="common-pointer"
                        as="h6"
                        size="md"
                        onClick={() =>
                          navigate("/homepage", { state: { aa: "aa" } })
                        }
                      >
                        About
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-[7px] items-center justify-center ml-[49px] mt-0.5">
                        <Text className="text-blue_gray_50" as="h6" size="md">
                          Program & Events
                        </Text>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-4 w-4"
                          alt="arrowdown_One"
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[50px] text-blue_gray_50"
                    >
                      <Text as="h6" size="md">
                        Alumni Story
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:" className="ml-12 text-blue_gray_50">
                      <Text as="h6" size="md">
                        Career Oppurtunity
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <Img
                        src="images/img_search.svg"
                        className="h-6 ml-[274px] mt-1"
                        alt="search"
                      />
                    </a>
                  </li>
                </ul>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[178px] md:ml-[0] ml-[39px] text-blue_gray_50 text-center text-lg"
                  shape="CircleBorder30"
                  size="sm"
                  variant="OutlineGray30033"
                >
                  Sign In
                </Button>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[163px] md:ml-[0] ml-[18px] md:mt-0 my-1.5 text-center text-gray_300 text-lg"
                  shape="CircleBorder30"
                  size="sm"
                  variant="FillGray30033"
                >
                  Join Now
                </Button>
              </div>
              <Line className="bg-blue_gray_600 h-px w-full" />
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[814px] items-center justify-end p-[78px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_mainbanner.svg')" }}
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1654px] mt-[123px] mx-auto w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start mb-[43px] w-[42%] md:w-full">
                <div className="flex flex-col gap-[43px] justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[34px] w-[56%] md:w-full">
                      <Text
                        className="text-white_A700 uppercase w-[49%] sm:w-full"
                        as="h6"
                        size="s"
                      >
                        best place for alumni
                      </Text>
                      <Line className="bg-gray_300 h-px sm:mt-0 my-3.5 w-[49%]" />
                    </div>
                    <div className="flex md:flex-col flex-row font-lora gap-2 items-start justify-between mt-[23px] w-full">
                      <Text className="!font-normal text-white_A700" size="8xl">
                        “
                      </Text>
                      <div className="h-[236px] md:mt-0 mt-[18px] relative w-[96%] md:w-full">
                        <Text
                          className="leading-[80.00px] m-auto text-white_A700 w-full"
                          as="h1"
                          size="8xl"
                        >
                          Find your career opportunities with the Elmna’s
                          community
                        </Text>
                        <Text
                          className="!font-normal absolute bottom-[4%] right-[8%] text-white_A700"
                          size="8xl"
                        >
                          “
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="leading-[28.00px] md:ml-[0] ml-[34px] mt-[21px] text-white_A700 w-[77%] sm:w-full"
                      size="xs"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[34px] w-[29%] md:w-full">
                    <div className="bg-gray_300 flex flex-col items-center justify-start p-3 rounded-[29px] w-full">
                      <a
                        href="javascript:"
                        className="text-black_900 w-[52%] sm:w-full"
                      >
                        <Text as="h6" size="md">
                          Learn More
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_map.svg"
                className="h-[38px] md:ml-[0] ml-[51px] md:mt-0 mt-[402px]"
                alt="map"
              />
              <Img
                src="images/img_icon_white_a700.svg"
                className="h-[130px] md:ml-[0] ml-[671px] md:mt-0 mt-[402px]"
                alt="icon"
              />
              <Img
                src="images/img_sliderindicator.svg"
                className="h-[194px] md:ml-[0] ml-[13px] md:mt-0 mt-[108px]"
                alt="sliderindicator"
              />
            </div>
          </div>
          <List
            className="bg-black_900 sm:flex-col flex-row font-lora md:gap-10 gap-[106px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center p-[67px] md:px-10 sm:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start mb-[3px] sm:ml-[0] w-full">
              <div className="flex sm:flex-col flex-row gap-[26px] items-start justify-between w-full">
                <div className="md:h-[77px] h-[98px] relative w-[15%] sm:w-full">
                  <Text
                    className="absolute font-lora inset-x-[0] mx-auto text-center text-gray_300 top-[0] w-max"
                    as="h1"
                    size="8xl"
                  >
                    24
                  </Text>
                  <Text
                    className="!font-semibold absolute bottom-[0] font-cairo inset-x-[0] leading-[28.00px] mx-auto text-center text-gray_300 w-full"
                    as="h6"
                    size="xs"
                  >
                    November
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="font-cairo leading-[28.00px] text-yellow_600 w-[45%] sm:w-full"
                    size="xs"
                  >
                    08:00 AM - 04:30 PM
                  </Text>
                  <Text
                    className="!font-medium font-lora mt-[13px] text-white_A700"
                    size="xl"
                  >
                    Weekend holiday with Elmna Club’s
                  </Text>
                  <Text
                    className="font-cairo leading-[28.00px] mt-0.5 text-gray_300 w-[89%] sm:w-full"
                    size="xs"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start mb-[3px] sm:ml-[0] w-full">
              <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-between w-full">
                <div className="md:h-[77px] h-[98px] relative w-[16%] sm:w-full">
                  <Text
                    className="absolute font-lora inset-x-[0] mx-auto text-center text-gray_300 top-[0] w-max"
                    as="h1"
                    size="8xl"
                  >
                    28
                  </Text>
                  <Text
                    className="!font-semibold absolute bottom-[0] font-cairo inset-x-[0] leading-[28.00px] mx-auto text-center text-gray_300 w-full"
                    as="h6"
                    size="xs"
                  >
                    November
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="font-cairo leading-[28.00px] text-yellow_600 w-[51%] sm:w-full"
                    size="xs"
                  >
                    08:00 AM - 04:30 PM
                  </Text>
                  <Text
                    className="!font-medium font-lora mt-[13px] text-white_A700"
                    size="xl"
                  >
                    Club Sponsorships 2020-2021
                  </Text>
                  <Text
                    className="font-cairo leading-[28.00px] mt-[3px] text-gray_300 w-full"
                    size="xs"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start mb-[3px] sm:ml-[0] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[29px] items-center justify-between w-[97%] md:w-full">
                  <Text
                    className="text-center text-gray_300"
                    as="h1"
                    size="8xl"
                  >
                    30
                  </Text>
                  <div className="flex flex-col gap-3.5 items-start justify-start">
                    <Text
                      className="font-cairo leading-[28.00px] text-yellow_600 w-[53%] sm:w-full"
                      size="xs"
                    >
                      08:00 AM - 04:30 PM
                    </Text>
                    <Text
                      className="!font-medium font-lora text-white_A700"
                      size="xl"
                    >
                      An Evening With Elmna’s Club
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-cairo gap-[29px] items-start justify-start w-full">
                  <Text
                    className="!font-semibold text-center text-gray_300"
                    as="h6"
                    size="xs"
                  >
                    November
                  </Text>
                  <Text
                    className="sm:flex-1 leading-[28.00px] text-gray_300 w-[78%] sm:w-full"
                    size="xs"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="font-cairo h-[1223px] md:h-[916px] mt-[118px] md:px-5 relative w-full">
            <div className="absolute h-[1074px] md:h-[798px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="absolute bg-white_A700 flex flex-col gap-[23px] inset-x-[0] items-center justify-start mx-auto p-[59px] md:px-10 sm:px-5 top-[0] w-full">
                <div className="md:h-[157px] h-[216px] relative w-[45%] md:w-full">
                  <Img
                    src="images/img_trash.svg"
                    className="absolute h-14 left-[11%] top-[19%]"
                    alt="trash"
                  />
                  <Text
                    className="!font-semibold absolute font-cairo inset-x-[0] mx-auto text-blue_gray_700 text-center top-[0] uppercase w-1/4 sm:w-full"
                    as="h4"
                    size="xl"
                  >
                    FEATURED EVENTS
                  </Text>
                  <Text
                    className="absolute bottom-[0] capitalize font-lora inset-x-[0] leading-[80.00px] mx-auto text-black_900_01 text-center w-full"
                    as="h1"
                    size="8xl"
                  >
                    Annual Meetup & Scholarship Presentation
                  </Text>
                </div>
                <div className="h-[148px] mb-[406px] relative w-[76%] md:w-full">
                  <div className="flex flex-col items-center justify-start mb-[-5.93px] mx-auto w-[34%] z-[1]">
                    <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start w-full">
                      <Img
                        src="images/img_mapmarker1.svg"
                        className="h-[23px] sm:mt-0 mt-0.5 w-6"
                        alt="mapmarkerOne"
                      />
                      <Text
                        className="!font-semibold sm:flex-1 text-gray_700_01 w-[92%] sm:w-full"
                        as="h6"
                        size="xs"
                      >
                        832 Thompson Drive, San Fransisco CA 94107, United
                        States
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="!font-normal leading-[32.00px] mt-auto mx-auto text-center text-gray_700_01 w-full"
                    size="md"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_image.svg"
                className="absolute bottom-[0] h-[561px] inset-x-[0] mx-auto"
                alt="image_One"
              />
            </div>
            <div className="absolute bottom-[0] h-[383px] sm:h-[530px] right-[8%] w-[35%] md:w-full">
              <div className="bg-blue_gray_700 h-[383px] m-auto rounded-[16px] shadow-bs w-[69%]"></div>
              <div className="absolute bg-gradient  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[50px] md:px-10 sm:px-5 rounded-[16px] w-full">
                <div className="flex flex-col gap-[22px] items-center justify-start mt-3.5 w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-[92%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="font-lora text-center text-white_A700"
                        as="h1"
                        size="8xl"
                      >
                        02
                      </Text>
                      <Text
                        className="font-cairo text-center text-gray_300 w-[81%] sm:w-full"
                        size="3xl"
                      >
                        Days
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="font-lora text-center text-white_A700"
                        as="h1"
                        size="8xl"
                      >
                        14
                      </Text>
                      <Text
                        className="font-cairo text-center text-gray_300 w-full"
                        size="3xl"
                      >
                        Hour
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="font-lora text-center text-white_A700"
                        as="h1"
                        size="8xl"
                      >
                        36
                      </Text>
                      <Text
                        className="font-cairo text-center text-gray_300 w-full"
                        size="3xl"
                      >
                        Minute
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="font-lora text-center text-white_A700"
                        as="h1"
                        size="8xl"
                      >
                        54
                      </Text>
                      <Text
                        className="font-cairo text-center text-gray_300 w-full"
                        size="3xl"
                      >
                        Seconds
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-12 items-center justify-start w-full">
                    <Line className="bg-blue_gray_600_01 h-px rounded-[1px] w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text className="text-gray_300" as="h3" size="4xl">
                          November 28th, 2020
                        </Text>
                        <Text
                          className="leading-[32.00px] text-gray_300 w-4/5 sm:w-full"
                          size="xs"
                        >
                          Monday, 08:00 AM - 06:00 PM
                        </Text>
                      </div>
                      <Button
                        className="flex items-center justify-center sm:ml-[0] ml-[88px] sm:mt-0 mt-[15px] w-14"
                        shape="icbRoundedBorder27"
                        size="mdIcn"
                        variant="icbOutlineGray300"
                      >
                        <Img
                          src="images/img_notificationbell.svg"
                          alt="notificationbel"
                        />
                      </Button>
                      <div className="bg-gray_300 flex flex-col items-center justify-end sm:ml-[0] ml-[9px] sm:mt-0 mt-[15px] p-2.5 rounded-[27px]">
                        <a
                          href="javascript:"
                          className="text-black_900_02 text-center w-[59%] sm:w-full"
                        >
                          <Text as="h6" size="md">
                            REGISTER
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[5%] flex sm:flex-col flex-row sm:gap-10 items-center justify-between left-[8%] w-[48%]">
              <div className="flex flex-row gap-[19px] items-center justify-start w-[27%] sm:w-full">
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[23px] w-6"
                  alt="arrowleft"
                />
                <Text
                  className="!font-normal text-gray_400_02 w-[82%] sm:w-full"
                  size="md"
                >
                  Weekend at Elmna Camp
                </Text>
              </div>
              <div className="flex flex-row gap-[25px] items-center justify-between w-[39%] sm:w-full">
                <Text
                  className="text-blue_gray_700 text-center underline"
                  as="h6"
                  size="md"
                >
                  New elmna “Start-up” in distrupt 2020
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[23px] w-6"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col items-center justify-start mt-[118px] p-[76px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1602px] mb-3 mx-auto w-full">
              <Text
                className="font-lora text-black_900_01 text-center"
                as="h1"
                size="8xl"
              >
                Why Join Elmna
              </Text>
              <Text
                className="font-cairo leading-[24.00px] mt-[22px] text-black_900_01 text-center w-2/5 sm:w-full"
                size="xs"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Text>
              <div className="flex flex-col font-cairo items-center justify-start mt-[71px] w-full">
                <div className="md:gap-5 gap-[111px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-[22px] py-[22px] rounded-lg w-full">
                    <div className="flex sm:flex-col flex-row gap-2 items-start justify-start mb-7 mt-[17px] w-full">
                      <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start mb-[76px] p-[17px] rounded-md w-[19%] sm:w-full">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[43px]"
                          alt="checkmark"
                        />
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start sm:mt-0 mt-[21px]">
                        <Text className="text-black_900" as="h3" size="5xl">
                          Guaranteed
                        </Text>
                        <Text
                          className="leading-[28.00px] text-black_900 w-full"
                          size="xs"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-[22px] py-[22px] rounded-lg w-full">
                    <div className="flex sm:flex-col flex-row gap-2 items-start justify-start mb-7 mt-[17px] w-full">
                      <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-end mb-[76px] p-5 rounded-md w-[19%] sm:w-full">
                        <Img
                          src="images/img_ticket.svg"
                          className="h-[37px] w-[38px]"
                          alt="ticket"
                        />
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start sm:mt-0 mt-[21px]">
                        <Text className="text-black_900" as="h3" size="5xl">
                          Strong Together
                        </Text>
                        <Text
                          className="leading-[28.00px] text-black_900 w-full"
                          size="xs"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-[22px] py-[22px] rounded-lg w-full">
                    <div className="flex sm:flex-col flex-row gap-2 items-start justify-start mb-[29px] mt-[17px] w-full">
                      <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start mb-[75px] p-5 rounded-md w-[19%] sm:w-full">
                        <Img
                          src="images/img_trophy.svg"
                          className="h-[37px] w-[38px]"
                          alt="trophy"
                        />
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start sm:mt-0 mt-5">
                        <Text className="text-black_900" as="h3" size="5xl">
                          Achievment
                        </Text>
                        <Text
                          className="leading-[28.00px] text-black_900 w-full"
                          size="xs"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-[22px] py-[22px] rounded-lg w-full">
                    <div className="flex sm:flex-col flex-row gap-2 items-start justify-start mb-7 mt-[17px] w-full">
                      <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start mb-[76px] p-3.5 rounded-md w-[19%] sm:w-full">
                        <Img
                          src="images/img_icon.svg"
                          className="h-10 my-[5px]"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start sm:mt-0 mt-[21px]">
                        <Text className="text-black_900" as="h3" size="5xl">
                          Learning
                        </Text>
                        <Text
                          className="leading-[28.00px] text-black_900 w-full"
                          size="xs"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-[22px] py-[22px] rounded-lg w-full">
                    <div className="flex sm:flex-col flex-row gap-2 items-start justify-start mb-7 mt-[17px] w-full">
                      <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start mb-[76px] p-[18px] rounded-md w-[19%] sm:w-full">
                        <Img
                          src="images/img_star51.svg"
                          className="h-[41px] w-[42px]"
                          alt="starFiftyOne"
                        />
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start sm:mt-0 mt-[21px]">
                        <Text className="text-black_900" as="h3" size="5xl">
                          Big Network
                        </Text>
                        <Text
                          className="leading-[28.00px] text-black_900 w-full"
                          size="xs"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:pr-5 pr-[22px] py-[22px] rounded-lg w-full">
                    <div className="flex sm:flex-col flex-row gap-2 items-start justify-start mb-[29px] mt-[17px] w-full">
                      <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-end mb-[75px] p-[18px] rounded-md w-[19%] sm:w-full">
                        <Img
                          src="images/img_star51.svg"
                          className="h-[41px] w-[42px]"
                          alt="starFiftyOne"
                        />
                      </div>
                      <div className="flex flex-col gap-5 items-start justify-start sm:mt-0 mt-5">
                        <Text className="text-black_900" as="h3" size="5xl">
                          Professional
                        </Text>
                        <Text
                          className="leading-[28.00px] text-black_900 w-full"
                          size="xs"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col font-lora md:gap-10 gap-[89px] items-center justify-start mt-[118px] p-[82px] md:px-10 sm:px-5 w-full">
            <Text className="text-black_900_01 text-center" as="h3" size="5xl">
              Our Partnership
            </Text>
            <Img
              src="images/img_clientlogo.svg"
              className="h-[60px] max-w-[1308px] mx-auto w-full"
              alt="clientlogo"
            />
          </div>
          <div className="flex mt-[118px] md:px-5 relative w-full">
            <div className="bg-gray_300 flex flex-col items-center justify-start my-auto w-[79%]">
              <div
                className="bg-cover bg-no-repeat md:h-[444px] sm:h-[586px] h-[878px] p-[104px] md:px-10 sm:px-5 relative w-full"
                style={{ backgroundImage: "url('images/img_group144.svg')" }}
              >
                <div className="absolute bottom-[12%] flex flex-col font-cairo items-center justify-start left-[10%] w-[55%]">
                  <div className="flex flex-col md:gap-10 gap-[182px] justify-start w-full">
                    <Img
                      src="images/img_trash.svg"
                      className="h-14 md:ml-[0] ml-[740px]"
                      alt="trash_One"
                    />
                    <div className="flex flex-col items-start justify-start mr-[9px] w-[99%] md:w-full">
                      <Text
                        className="!font-normal leading-[32.00px] text-gray_700_01 w-full"
                        size="md"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                      </Text>
                      <Img
                        src="images/img_william.svg"
                        className="h-[63px] mt-[74px]"
                        alt="william"
                      />
                      <Text
                        className="!font-normal leading-[32.00px] mt-[23px] text-black_900_01 w-[15%] sm:w-full"
                        size="md"
                      >
                        William Durant
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="!font-semibold absolute font-cairo left-[10%] text-blue_gray_700 top-[17%] uppercase w-[15%] sm:w-full"
                  as="h4"
                  size="xl"
                >
                  Grandmaster Talk
                </Text>
                <Text
                  className="absolute capitalize font-lora leading-[90.00px] left-[10%] text-black_900 top-1/4 w-[64%] sm:w-full"
                  as="h1"
                  size="8xl"
                >
                  Education is a progressive discovery of our own ignorance
                </Text>
              </div>
            </div>
            <Img
              src="images/img_image_gray_400.svg"
              className="h-[637px] ml-[-226px] my-auto z-[1]"
              alt="image_Two"
            />
          </div>
          <List
            className="bg-white_A700 sm:flex-col flex-row md:gap-10 gap-[271px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1620px] mt-[118px] mx-auto p-[60px] md:px-5 rounded-md w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                src="images/img_user31.svg"
                className="h-[78px]"
                alt="userThirtyOne"
              />
              <Text
                className="font-lora mt-[37px] text-blue_gray_700 text-center"
                as="h1"
                size="8xl"
              >
                345,568
              </Text>
              <Text
                className="!font-semibold font-cairo mt-1 text-center text-gray_700_01 w-[31%] sm:w-full"
                as="h6"
                size="md"
              >
                Member
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                src="images/img_reply.svg"
                className="h-[78px]"
                alt="reply"
              />
              <Text
                className="font-lora mt-[37px] text-blue_gray_700 text-center"
                as="h1"
                size="8xl"
              >
                8,356
              </Text>
              <Text
                className="!font-semibold font-cairo mt-1 text-center text-gray_700_01 w-[39%] sm:w-full"
                as="h6"
                size="md"
              >
                Partner
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                src="images/img_money11.svg"
                className="h-[78px]"
                alt="moneyEleven"
              />
              <Text
                className="font-lora mt-[34px] text-blue_gray_700 text-center"
                as="h1"
                size="8xl"
              >
                941
              </Text>
              <Text
                className="!font-semibold font-cairo mt-2 text-center text-gray_700_01 w-full"
                as="h6"
                size="md"
              >
                Sponsorships
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                src="images/img_calendarsilhouette.svg"
                className="h-[78px]"
                alt="calendarsilhoue"
              />
              <Text
                className="font-lora mt-[34px] text-blue_gray_700 text-center"
                as="h1"
                size="8xl"
              >
                678
              </Text>
              <Text
                className="!font-semibold font-cairo mt-2 text-center text-gray_700_01 w-[55%] sm:w-full"
                as="h6"
                size="md"
              >
                Events
              </Text>
            </div>
          </List>
          <div className="bg-white_A700 flex flex-col items-center justify-start mt-[118px] p-[76px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1572px] mb-[7px] mx-auto w-full">
              <Text
                className="font-lora text-black_900_01 text-center"
                as="h1"
                size="8xl"
              >
                Career Opportunity
              </Text>
              <Text
                className="font-cairo mt-1 text-black_900_99 text-center w-[38%] sm:w-full"
                size="xs"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Text>
              <div className="flex flex-col font-cairo md:gap-10 gap-[69px] items-center justify-start mt-[70px] w-full">
                <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[26px] sm:px-5 rounded-[20px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-3.5 justify-start mt-0.5 w-full">
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                        <Img
                          src="images/img_companylogo.svg"
                          className="h-[81px]"
                          alt="companylogo"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="font-lora text-black_900_02"
                                as="h4"
                                size="xl"
                              >
                                Branch Manager
                              </Text>
                              <Text
                                className="!font-normal font-cairo text-blue_gray_700 w-3/4 sm:w-full"
                                size="md"
                              >
                                Highspeed Studios
                              </Text>
                            </div>
                            <div className="bg-teal_50 flex flex-col items-center justify-end md:ml-[0] ml-[180px] md:mt-0 my-[3px] p-3 rounded-[29px]">
                              <Text
                                className="text-blue_gray_700 w-[72%] sm:w-full"
                                as="h6"
                                size="md"
                              >
                                Apply Now
                              </Text>
                            </div>
                            <Button
                              className="flex items-center justify-center md:ml-[0] ml-[23px] md:mt-0 mt-0.5 w-[60px]"
                              shape="icbRoundedBorder27"
                              size="mdIcn"
                              variant="icbOutlineBluegray700"
                            >
                              <Img
                                src="images/img_bookmark11.svg"
                                alt="bookmarkEleven"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[67px] items-center justify-start md:ml-[0] ml-[106px] w-[65%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[45%] sm:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row gap-[17px] items-end justify-start w-full">
                              <Img
                                src="images/img_icsalary.svg"
                                className="h-[27px] mt-[7px] w-7"
                                alt="icsalary"
                              />
                              <Text
                                className="sm:flex-1 text-blue_gray_900_01 w-[79%] sm:w-full"
                                as="h5"
                                size="lg"
                              >
                                $14,000 - $25,000
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[45px] text-gray_700_01 w-1/2 sm:w-full"
                              size="xs"
                            >
                              Monthly Salary
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[41%] sm:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row gap-5 items-center justify-start w-full">
                              <Img
                                src="images/img_place1.svg"
                                className="h-[23px] w-6"
                                alt="placeOne"
                              />
                              <Text
                                className="sm:flex-1 text-blue_gray_900_01 w-[77%] sm:w-full"
                                as="h5"
                                size="lg"
                              >
                                London, England
                              </Text>
                            </div>
                            <Text
                              className="ml-11 md:ml-[0] text-gray_700_01 w-[32%] sm:w-full"
                              size="xs"
                            >
                              Location
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[26px] sm:px-5 rounded-[20px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-3.5 justify-start mt-0.5 w-full">
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                        <Img
                          src="images/img_companylogo.svg"
                          className="h-[81px]"
                          alt="companylogo"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="font-lora text-black_900_02"
                                as="h4"
                                size="xl"
                              >
                                Sales Marketing Manager
                              </Text>
                              <Text
                                className="!font-normal font-cairo text-blue_gray_700 w-[53%] sm:w-full"
                                size="md"
                              >
                                Oliver Group London
                              </Text>
                            </div>
                            <div className="bg-teal_50 flex flex-col items-center justify-end md:ml-[0] ml-[77px] md:mt-0 my-[3px] p-3 rounded-[29px]">
                              <Text
                                className="text-blue_gray_700 w-[72%] sm:w-full"
                                as="h6"
                                size="md"
                              >
                                Apply Now
                              </Text>
                            </div>
                            <Button
                              className="flex items-center justify-center md:ml-[0] ml-[23px] md:mt-0 mt-0.5 w-[60px]"
                              shape="icbRoundedBorder27"
                              size="mdIcn"
                              variant="icbOutlineBluegray700"
                            >
                              <Img
                                src="images/img_bookmark11.svg"
                                alt="bookmarkEleven"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[67px] items-center justify-start md:ml-[0] ml-[106px] w-[65%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[45%] sm:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row gap-[17px] items-end justify-start w-full">
                              <Img
                                src="images/img_icsalary.svg"
                                className="h-[27px] mt-[7px] w-7"
                                alt="icsalary"
                              />
                              <Text
                                className="sm:flex-1 text-blue_gray_900_01 w-[79%] sm:w-full"
                                as="h5"
                                size="lg"
                              >
                                $14,000 - $25,000
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[45px] text-gray_700_01 w-1/2 sm:w-full"
                              size="xs"
                            >
                              Monthly Salary
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[41%] sm:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row gap-5 items-center justify-start w-full">
                              <Img
                                src="images/img_place1.svg"
                                className="h-[23px] w-6"
                                alt="placeOne"
                              />
                              <Text
                                className="sm:flex-1 text-blue_gray_900_01 w-[77%] sm:w-full"
                                as="h5"
                                size="lg"
                              >
                                London, England
                              </Text>
                            </div>
                            <Text
                              className="ml-11 md:ml-[0] text-gray_700_01 w-[32%] sm:w-full"
                              size="xs"
                            >
                              Location
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[26px] sm:px-5 rounded-[20px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-3.5 justify-start mt-0.5 w-full">
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                        <Img
                          src="images/img_companylogo.svg"
                          className="h-[81px]"
                          alt="companylogo"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="font-lora text-black_900_02"
                                as="h4"
                                size="xl"
                              >
                                Business Analyst
                              </Text>
                              <Text
                                className="!font-normal font-cairo text-blue_gray_700 w-[78%] sm:w-full"
                                size="md"
                              >
                                Merahputih Sutdios
                              </Text>
                            </div>
                            <div className="bg-teal_50 flex flex-col items-center justify-start ml-44 md:ml-[0] md:mt-0 my-[3px] p-3 rounded-[29px]">
                              <Text
                                className="text-blue_gray_700 w-[72%] sm:w-full"
                                as="h6"
                                size="md"
                              >
                                Apply Now
                              </Text>
                            </div>
                            <Button
                              className="flex items-center justify-center md:ml-[0] ml-[23px] md:mt-0 mt-0.5 w-[60px]"
                              shape="icbRoundedBorder27"
                              size="mdIcn"
                              variant="icbOutlineBluegray700"
                            >
                              <Img
                                src="images/img_bookmark11.svg"
                                alt="bookmarkEleven"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[67px] items-center justify-start md:ml-[0] ml-[106px] w-[65%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[45%] sm:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row gap-[17px] items-end justify-start w-full">
                              <Img
                                src="images/img_icsalary.svg"
                                className="h-[27px] mt-[7px] w-7"
                                alt="icsalary"
                              />
                              <Text
                                className="sm:flex-1 text-blue_gray_900_01 w-[79%] sm:w-full"
                                as="h5"
                                size="lg"
                              >
                                $14,000 - $25,000
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[45px] text-gray_700_01 w-1/2 sm:w-full"
                              size="xs"
                            >
                              Monthly Salary
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[41%] sm:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row gap-5 items-center justify-start w-full">
                              <Img
                                src="images/img_place1.svg"
                                className="h-[23px] w-6"
                                alt="placeOne"
                              />
                              <Text
                                className="sm:flex-1 text-blue_gray_900_01 w-[77%] sm:w-full"
                                as="h5"
                                size="lg"
                              >
                                London, England
                              </Text>
                            </div>
                            <Text
                              className="ml-11 md:ml-[0] text-gray_700_01 w-[32%] sm:w-full"
                              size="xs"
                            >
                              Location
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-end p-[26px] sm:px-5 rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <div className="flex flex-col gap-3.5 justify-start mt-0.5 w-full">
                      <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                        <Img
                          src="images/img_companylogo.svg"
                          className="h-[81px]"
                          alt="companylogo"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="font-lora text-black_900_02"
                                as="h4"
                                size="xl"
                              >
                                Graphic Designer
                              </Text>
                              <Text
                                className="!font-normal font-cairo text-blue_gray_700 w-[62%] sm:w-full"
                                size="md"
                              >
                                UD. Madju Djaya
                              </Text>
                            </div>
                            <div className="bg-blue_gray_700 flex flex-col items-center justify-start md:ml-[0] ml-[168px] md:mt-0 my-[3px] p-3 rounded-[29px]">
                              <Text
                                className="text-gray_300 w-[72%] sm:w-full"
                                as="h6"
                                size="md"
                              >
                                Apply Now
                              </Text>
                            </div>
                            <Button
                              className="flex items-center justify-center md:ml-[0] ml-[23px] md:mt-0 mt-0.5 w-[60px]"
                              shape="icbRoundedBorder27"
                              size="mdIcn"
                              variant="icbOutlineBluegray700"
                            >
                              <Img
                                src="images/img_bookmark11.svg"
                                alt="bookmarkEleven"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[67px] items-center justify-start md:ml-[0] ml-[106px] w-[65%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[45%] sm:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row gap-[17px] items-end justify-start w-full">
                              <Img
                                src="images/img_icsalary.svg"
                                className="h-[27px] mt-[7px] w-7"
                                alt="icsalary"
                              />
                              <Text
                                className="sm:flex-1 text-blue_gray_900_01 w-[79%] sm:w-full"
                                as="h5"
                                size="lg"
                              >
                                $14,000 - $25,000
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[45px] text-gray_700_01 w-1/2 sm:w-full"
                              size="xs"
                            >
                              Monthly Salary
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[41%] sm:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row gap-5 items-center justify-start w-full">
                              <Img
                                src="images/img_place1.svg"
                                className="h-[23px] w-6"
                                alt="placeOne"
                              />
                              <Text
                                className="sm:flex-1 text-blue_gray_900_01 w-[77%] sm:w-full"
                                as="h5"
                                size="lg"
                              >
                                London, England
                              </Text>
                            </div>
                            <Text
                              className="ml-11 md:ml-[0] text-gray_700_01 w-[32%] sm:w-full"
                              size="xs"
                            >
                              Location
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[413px] sm:min-w-full text-blue_gray_700 text-center text-xl"
                  shape="CircleBorder30"
                  size="sm"
                  variant="FillTeal50"
                >
                  Load More
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[723px] md:h-[842px] sm:h-[914px] mt-[122px] md:px-5 relative w-full">
            <div className="absolute bg-blue_gray_700 flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[164px] md:px-10 sm:px-5 right-[0] w-[79%]">
              <div className="flex flex-col items-start justify-start mr-[121px] w-[57%] md:w-full">
                <Text
                  className="!font-semibold font-cairo text-yellow_600 uppercase w-[31%] sm:w-full"
                  as="h4"
                  size="xl"
                >
                  Alumni Interview
                </Text>
                <Text
                  className="font-lora mt-2 text-gray_300"
                  as="h1"
                  size="8xl"
                >
                  Roberto Karloz
                </Text>
                <Text
                  className="font-cairo mt-3 text-gray_300 w-full"
                  size="xs"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </Text>
                <div className="flex sm:flex-col flex-row font-cairo gap-[50px] items-center justify-start mt-11 w-[78%] md:w-full">
                  <div className="bg-gray_300 flex flex-row gap-4 items-center justify-center p-3 rounded-[29px] w-[46%] sm:w-full">
                    <Text
                      className="ml-[41px] text-black_900 w-[42%] sm:w-full"
                      as="h6"
                      size="md"
                    >
                      Read Story
                    </Text>
                    <Img
                      src="images/img_arrowright_black_900.svg"
                      className="h-[23px] mr-10 w-6"
                      alt="arrowright_One"
                    />
                  </div>
                  <Img
                    src="images/img_follow.svg"
                    className="h-[22px]"
                    alt="follow"
                  />
                </div>
              </div>
            </div>
            <Img
              src="images/img_profile.svg"
              className="absolute bottom-[5%] h-[604px] left-[0]"
              alt="profile"
            />
          </div>
          <div className="bg-white_A700 flex flex-col items-center justify-end mt-[123px] p-[69px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1620px] mx-auto w-full">
              <Text
                className="font-lora text-black_900_01 text-center"
                as="h1"
                size="8xl"
              >
                Latest News
              </Text>
              <Text
                className="font-cairo mt-2.5 text-black_900_99 text-center w-[37%] sm:w-full"
                size="xs"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Text>
              <div className="flex flex-col font-cairo gap-[29px] items-center justify-start mt-[59px] w-full">
                <List
                  className="sm:flex-col flex-row gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer flex flex-1 flex-col gap-[33px] items-center justify-start sm:ml-[0] hover:mx-0 pb-[37px] rounded-[20px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="bg-gray_400 h-[232px] rounded-tl-[20px] rounded-tr-[20px] w-full"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="font-lora leading-[34.00px] text-black_900 w-[94%] sm:w-full"
                        size="2xl"
                      >
                        Elmna’s in Silicon Valley: Finance vs Family
                      </Text>
                      <Text
                        className="!font-semibold font-cairo leading-[28.00px] mt-3 text-blue_gray_700 w-[73%] sm:w-full"
                        as="h6"
                        size="xs"
                      >
                        By Admin, on Nov 23th, 2020 | 1 days ago
                      </Text>
                      <Text
                        className="font-cairo leading-[26.00px] mt-4 text-gray_700_01 w-full"
                        size="xs"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut ...
                      </Text>
                      <Text
                        className="!font-semibold font-cairo leading-[34.00px] mt-3 text-blue_gray_700 w-[21%] sm:w-full"
                        as="h6"
                        size="md"
                      >
                        Read more
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer flex flex-1 flex-col gap-[33px] items-center justify-start sm:ml-[0] hover:mx-0 pb-[37px] rounded-[20px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                    <div className="bg-gray_400 h-[232px] rounded-tl-[20px] rounded-tr-[20px] w-full"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="font-lora leading-[34.00px] text-black_900 w-[94%] sm:w-full"
                        size="2xl"
                      >
                        Elmna’s Library Gives Alumni New Access
                      </Text>
                      <Text
                        className="!font-semibold font-cairo leading-[28.00px] mt-3 text-blue_gray_700 w-[73%] sm:w-full"
                        as="h6"
                        size="xs"
                      >
                        By Admin, on Nov 23th, 2020 | 1 days ago
                      </Text>
                      <Text
                        className="font-cairo leading-[26.00px] mt-4 text-gray_700_01 w-full"
                        size="xs"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut ...
                      </Text>
                      <Text
                        className="!font-semibold font-cairo leading-[34.00px] mt-3 text-blue_gray_700 w-[21%] sm:w-full"
                        as="h6"
                        size="md"
                      >
                        Read more
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border hover:border-0 border-gray_300 border-solid hover:cursor-pointer flex flex-1 flex-col gap-[33px] items-center justify-start sm:ml-[0] hover:mx-0 pb-[37px] rounded-[20px] hover:shadow-bs1 hover:w-full w-full">
                    <div className="bg-gray_400 h-[232px] rounded-tl-[20px] rounded-tr-[20px] w-full"></div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="font-lora leading-[34.00px] text-black_900 w-[94%] sm:w-full"
                        size="2xl"
                      >
                        Alumni Service Sportlight: Haji Mahmud AB OO2
                      </Text>
                      <Text
                        className="!font-semibold font-cairo leading-[28.00px] mt-3 text-blue_gray_700 w-[73%] sm:w-full"
                        as="h6"
                        size="xs"
                      >
                        By Admin, on Nov 23th, 2020 | 1 days ago
                      </Text>
                      <Text
                        className="font-cairo leading-[26.00px] mt-4 text-gray_700_01 w-full"
                        size="xs"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut ...
                      </Text>
                      <Text
                        className="!font-semibold font-cairo leading-[34.00px] mt-3 text-blue_gray_700 w-[21%] sm:w-full"
                        as="h6"
                        size="md"
                      >
                        Read more
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-5 rotate-[180deg] rounded-md">
                      <Img
                        src="images/img_rightarrows1.svg"
                        className="h-[37px] w-[38px]"
                        alt="rightarrowsOne"
                      />
                    </div>
                    <Button
                      className="cursor-pointer font-bold min-w-[201px] mt-4 text-center text-gray_300 text-xl"
                      shape="CircleBorder30"
                      size="sm"
                      variant="FillBluegray700"
                    >
                      Load More
                    </Button>
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-5 rounded-md">
                      <Img
                        src="images/img_rightarrows1_blue_gray_700.svg"
                        className="h-[37px] w-[38px]"
                        alt="rightarrowsOne_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col items-center justify-end mt-[118px] p-[59px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[79px] items-center justify-start max-w-[1621px] mt-1.5 mx-auto w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col font-lora items-center justify-start">
                  <Text className="text-black_900_01" as="h1" size="8xl">
                    Upcoming Events
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold font-cairo mb-3.5 min-w-[196px] text-center text-gray_300 text-xl"
                  shape="CircleBorder30"
                  size="sm"
                  variant="FillBluegray700"
                >
                  View More
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="md:h-[555px] h-[560px] relative w-full">
                  <div className="absolute bg-white_A700 border border-gray_300 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[29px] sm:px-5 rounded-[20px] w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start mb-[29px] mt-[314px]">
                      <Text
                        className="!font-semibold font-cairo text-blue_gray_700 tracking-[2.00px]"
                        as="h6"
                        size="md"
                      >
                        MOBILE APP
                      </Text>
                      <Text
                        className="!font-bold font-lora text-blue_gray_800"
                        as="h5"
                        size="lg"
                      >
                        Global Android Programmer Meetup 2020{" "}
                      </Text>
                      <Text
                        className="font-cairo leading-[28.00px] text-gray_700_01 w-full"
                        size="xs"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco ....
                      </Text>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[313px] inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[202px] pt-[202px] top-[0] w-full"
                    style={{ backgroundImage: "url('images/img_group59.svg')" }}
                  >
                    <div className="bg-blue_gray_700 flex flex-col items-start justify-end p-[18px] rounded-md w-[72%] md:w-full">
                      <div className="flex flex-row gap-[52px] items-center justify-start md:ml-[0] ml-[9px] w-[83%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="font-lora text-white_A700"
                            as="h2"
                            size="6xl"
                          >
                            20
                          </Text>
                          <Text
                            className="!font-semibold font-cairo text-white_A700_70"
                            as="h6"
                            size="md"
                          >
                            NOV
                          </Text>
                        </div>
                        <Button
                          className="flex items-center justify-center my-1.5 w-[60px]"
                          shape="icbRoundedBorder27"
                          size="mdIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_bookmark11.svg"
                            alt="bookmarkEleven"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[557px] h-[560px] relative w-full">
                  <div className="absolute bg-white_A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[29px] sm:px-5 rounded-[20px] shadow-bs1 w-full">
                    <div className="flex flex-col items-start justify-start mb-[29px] mt-[314px]">
                      <Text
                        className="!font-semibold font-cairo text-blue_gray_700 tracking-[2.00px]"
                        as="h6"
                        size="md"
                      >
                        ART EXIBITHION
                      </Text>
                      <Text
                        className="!font-bold font-lora mt-[9px] text-blue_gray_800"
                        as="h5"
                        size="lg"
                      >
                        Paris Designer Meetup with Ziro Partner
                      </Text>
                      <Text
                        className="font-cairo leading-[28.00px] mt-3 text-gray_700_01 w-full"
                        size="xs"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco ....
                      </Text>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[313px] inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[202px] pt-[202px] top-[0] w-full"
                    style={{ backgroundImage: "url('images/img_group59.svg')" }}
                  >
                    <div className="bg-black_900 flex flex-col items-start justify-end p-[18px] rounded-md w-[72%] md:w-full">
                      <div className="flex flex-row gap-[55px] items-center justify-start md:ml-[0] ml-[9px] w-[83%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-lora text-white_A700"
                            as="h2"
                            size="6xl"
                          >
                            25
                          </Text>
                          <Text
                            className="!font-semibold font-cairo mt-0.5 text-white_A700_70"
                            as="h6"
                            size="md"
                          >
                            NOV
                          </Text>
                        </div>
                        <Button
                          className="flex items-center justify-center mb-[5px] mt-2 w-[60px]"
                          shape="icbRoundedBorder27"
                          size="mdIcn"
                          variant="icbFillWhiteA70042"
                        >
                          <Img
                            src="images/img_bookmark11_gray_300.svg"
                            alt="bookmarkEleven"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[555px] h-[560px] relative w-full">
                  <div className="absolute bg-white_A700 border border-gray_300 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto p-[29px] sm:px-5 rounded-[20px] w-full">
                    <div className="flex flex-col items-start justify-start mb-[3px] mt-[314px]">
                      <Text
                        className="!font-semibold font-cairo text-blue_gray_700 tracking-[2.00px]"
                        as="h6"
                        size="md"
                      >
                        ACCOUNTING
                      </Text>
                      <Text
                        className="!font-bold font-lora mt-1.5 text-blue_gray_800 w-full"
                        as="h5"
                        size="lg"
                      >
                        Bussiness Plan in Pandemic with Famous Native Speaker
                      </Text>
                      <Text
                        className="font-cairo leading-[28.00px] mt-[13px] text-gray_700_01 w-full"
                        size="xs"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco ....
                      </Text>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[313px] inset-x-[0] items-start justify-start mx-auto md:pr-10 sm:pr-5 pr-[202px] pt-[202px] top-[0] w-full"
                    style={{ backgroundImage: "url('images/img_group59.svg')" }}
                  >
                    <div className="bg-black_900 flex flex-col items-start justify-end p-[18px] rounded-md w-[72%] md:w-full">
                      <div className="flex flex-row gap-[54px] items-center justify-start md:ml-[0] ml-[9px] w-[83%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="font-lora text-white_A700"
                            as="h2"
                            size="6xl"
                          >
                            28
                          </Text>
                          <Text
                            className="!font-semibold font-cairo text-white_A700_70"
                            as="h6"
                            size="md"
                          >
                            NOV
                          </Text>
                        </div>
                        <Button
                          className="flex items-center justify-center my-1.5 w-[60px]"
                          shape="icbRoundedBorder27"
                          size="mdIcn"
                          variant="icbFillWhiteA70042"
                        >
                          <Img
                            src="images/img_bookmark11_gray_300.svg"
                            alt="bookmarkEleven"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col font-lora items-center justify-start mt-[118px] w-full">
            <div className="bg-black_900 flex flex-col items-center justify-start w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[361px] items-center justify-start p-[105px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group143.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1619px] mx-auto w-full">
                  <Text
                    className="leading-[76.00px] text-white_A700"
                    size="7xl"
                  >
                    Don’t miss our weekly updates about elmna’s alumni story
                  </Text>
                  <div className="bg-black_900 border border-gray_300 border-solid flex md:flex-1 sm:flex-col flex-row font-cairo sm:gap-10 items-center justify-between md:mt-0 my-[35px] p-[9px] rounded-[39px] w-[34%] md:w-full">
                    <Text
                      className="!font-normal sm:ml-[0] ml-[27px] text-gray_600"
                      size="md"
                    >
                      Enter your email address...
                    </Text>
                    <div className="bg-blue_gray_700 flex flex-col items-center justify-start p-[11px] rounded-[29px]">
                      <Text
                        className="text-white_A700 w-[52%] sm:w-full"
                        as="h6"
                        size="md"
                      >
                        SUBSCRIBE
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white_A700 flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-center mt-[135px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[84%] md:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start w-[33%] md:w-full">
                <Img
                  src="images/img_logo_blue_gray_700.svg"
                  className="h-[72px]"
                  alt="logo_One"
                />
                <Text
                  className="leading-[24.00px] text-black_900 w-full"
                  size="xs"
                >
                  Elmna University Alumni is a lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud
                </Text>
                <div className="flex flex-col items-center justify-start w-[65%] md:w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text className="text-black_900" size="xs">
                      Follow Us
                    </Text>
                    <Img
                      src="images/img_group78.svg"
                      className="h-[51px] md:ml-[0] ml-[5px]"
                      alt="groupSeventyEight"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[104px] md:mt-0 mt-[5px] w-[7%] md:w-full">
                <Text className="!font-bold text-black_900" as="h5" size="lg">
                  Why Elmna
                </Text>
                <ul className="flex flex-col gap-[15px] items-start justify-start md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        About elmna
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Enterprise
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Alumni Story
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Community
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start md:ml-[0] ml-[164px] md:mt-0 mt-[3px] w-[6%] md:w-full">
                <Text className="!font-bold text-black_900" as="h5" size="lg">
                  Resources
                </Text>
                <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Download
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold mt-[15px] text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Help Center
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold mt-3 text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Events
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold mt-[13px] text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Guides
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold mt-3.5 text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Partner
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[124px] md:mt-0 mt-[5px] w-[7%] md:w-full">
                <Text className="!font-bold text-black_900" as="h5" size="lg">
                  Community
                </Text>
                <ul className="flex flex-col gap-3.5 items-start justify-start md:w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        About us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Contact us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Login
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        Sign Up
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="!font-semibold text-gray_700_01"
                    >
                      <Text as="h6" size="xs">
                        FAQ
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="flex flex-col items-start justify-start md:ml-[0] ml-[114px] md:mt-0 mt-[3px] w-[18%] md:w-full common-column-list">
                <li>
                  <a href="javascript:" className="!font-bold text-black_900">
                    <Text as="h5" size="lg">
                      Get in Touch with Us
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-[15px] items-start justify-start mt-[15px]">
                      <Img
                        src="images/img_pin51.svg"
                        className="h-6 mt-[9px] w-6"
                        alt="pinFiftyOne"
                      />
                      <Text
                        className="!font-semibold text-gray_700_01"
                        as="h6"
                        size="xs"
                      >
                        <>
                          832 Thompson Drive, San Fransisco
                          <br />
                          CA 94107, United States
                        </>
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-[15px] items-start justify-start mt-7">
                      <Img
                        src="images/img_telephonecall1_gray_700_01.svg"
                        className="h-6 mt-1 w-6"
                        alt="telephonecallOne_One"
                      />
                      <Text
                        className="!font-semibold text-gray_700_01"
                        as="h6"
                        size="xs"
                      >
                        +123 345123 556
                      </Text>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row gap-[15px] items-center justify-start mt-[25px]">
                      <Img
                        src="images/img_inbox21_gray_700_01.svg"
                        className="h-6 w-6"
                        alt="inboxTwentyOne_One"
                      />
                      <Text
                        className="!font-semibold text-gray_700_01"
                        as="h6"
                        size="xs"
                      >
                        support@elmna.com
                      </Text>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start pb-6 w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                <Line className="bg-gray_100_14 h-px w-full" />
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[85%] md:w-full">
                  <Text
                    className="!font-semibold text-black_900"
                    as="h6"
                    size="xs"
                  >
                    Elmna University Alumni - © 2020 All Rights Reserved
                  </Text>
                  <ul className="flex flex-row gap-[50px] items-start justify-center md:ml-[0] ml-[253px] w-[23%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-gray_700_01">
                        <Text size="xs">About</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray_700_01">
                        <Text size="xs">FAQ</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray_700_01">
                        <Text size="xs">Privacy Policy</Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-gray_700_01">
                        <Text size="xs">Sitemap</Text>
                      </a>
                    </li>
                  </ul>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[442px]">
                    <Text
                      className="!font-semibold text-black_900 text-right"
                      as="h6"
                      size="xs"
                    >
                      Made with ♥ by Peterdraw
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepagePage;
