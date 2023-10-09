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
import GitHubButton from 'react-github-btn'
export default function Nav() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  const { user } = useUserContext();
  return (
    <>


      <Navbar isBordered maxWidth="2xl">
        <NavbarBrand as={Link} href={"/"} className="left-0">
          <h3 className="text-md lg:text-3xl"> 
          <span className="text-blue-600">L</span><span className="font-light">earnS</span><span className="font-thin">ource</span>
          </h3>
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

<GitHubButton href="https://github.com/mayurjadhav2002/next-application" data-color-scheme="no-preference: dark; light: dark; dark: light_high_contrast;" data-size="large" data-show-count="true" aria-label="Star mayurjadhav2002/next-application on GitHub">Star</GitHubButton>


        </NavbarContent>
      </Navbar>
    </>
  );
}
