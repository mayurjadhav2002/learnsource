'use client'
import React from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  Button, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection
} from "@nextui-org/react";
import Link from "next/link";
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TbUsersGroup } from 'react-icons/tb'
import {FcFeedback, FcBusinessContact} from 'react-icons/fc'
export default function Nav() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <>


      <Navbar isBordered maxWidth="2xl">
        <NavbarBrand className="left-0">
          <Image src="https://i.postimg.cc/xjsc22Wp/logo1.png"
            width={150}

          />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5 text-lg" justify="center">
          <NavbarItem>
            <Link href="/blogs">
              Internship/Courses
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/softwares">
              Softwares
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/udemy-free-courses">
              Udemy
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={"/hi"}>
              Be Contributor
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <span className="cursor-pointer flex items-center">Menu <RiArrowDropDownLine /> </span>
              </DropdownTrigger>


              <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => alert(key)}
              >
                <DropdownSection title="about qbytespace" showDivider>

                  <DropdownItem
                    key="new"
                    startContent={<TbUsersGroup className={iconClasses} />}
                  >
                    About Us
                  </DropdownItem>

                  <DropdownItem
                    key="new"
                    startContent={<FcBusinessContact className={iconClasses} />}
                  >
                    Contact
                  </DropdownItem>

                  <DropdownItem
                    key="new"
                    startContent={<FcFeedback className={iconClasses} />}
                  >
                    Write Feedback
                  </DropdownItem>


                </DropdownSection>
                {/* Policies */}
                <DropdownSection title="policies">

                  <DropdownItem
                    key="new"
                  >
                    Disclaimer
                  </DropdownItem>


                  <DropdownItem
                    key="new"
                  >
                    Terms and Conditions
                  </DropdownItem>



                  <DropdownItem
                    key="new"
                  >
                    Privacy policy
                  </DropdownItem>

                </DropdownSection>



              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" href="/" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>

        </NavbarContent>
      </Navbar>
    </>
  );
}
