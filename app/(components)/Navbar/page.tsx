'use client'
import React, { useContext } from "react";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  Button, Image, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection
} from "@nextui-org/react";
import Link from "next/link";
import { RiArrowDropDownLine } from 'react-icons/ri'
import { TbUsersGroup } from 'react-icons/tb'
import { FcFeedback, FcBusinessContact } from 'react-icons/fc'
import { useUserContext } from "@/app/auth/userContext/userContext";
export default function Nav() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const { user, logout } = useUserContext();
  return (
    <>


      <Navbar isBordered maxWidth="2xl">
        <NavbarBrand className="left-0">
          <h1 className="text-3xl"> <span className="text-blue-600 text-4xl">Q</span><span className="font-light">Bytȅ</span><span className="font-thin">Space</span></h1>
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
                  as={Link} href={'/disclaimer'}
                  >
                    Disclaimer
                  </DropdownItem>


                  <DropdownItem as={Link} href={'/terms-and-conditions'}
                  >
                    Terms and Conditions
                  </DropdownItem>



                  <DropdownItem
                  >
                    Privacy policy
                  </DropdownItem>

                </DropdownSection>



              </DropdownMenu>
            </Dropdown>
          </NavbarItem>

        </NavbarContent>

        <NavbarContent justify="end">

          <>
             {user === null ? <> <NavbarItem className="hidden lg:flex">
            <Link href="/auth">Login</Link>
          </NavbarItem>
            <NavbarItem>
              <Button as={Link} href={"/auth/signup"} color="primary" variant="flat">
                Sign Up
              </Button>
            </NavbarItem></> :
            user.name}
          
          </>
       

        
        </NavbarContent>
      </Navbar>
    </>
  );
}
