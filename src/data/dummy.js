import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";

import { TiSpanner } from "react-icons/ti";
import { VscSourceControl } from "react-icons/vsc";
import {
  FiShoppingBag,
  FiEdit,
  FiPieChart,
  FiBarChart,
  FiCreditCard,
  FiStar,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  BsBoxSeam,
  BsCurrencyDollar,
  BsShield,
  BsChatLeft,
  BsFillCalendarCheckFill,
  BsPeople,
} from "react-icons/bs";

import {
  BiColorFill,
  BiEnvelope,
  BiBuildingHouse,
  BiCog,
} from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine, RiPhoneFindLine } from "react-icons/ri";
import {
  MdOutlineDashboard,
  MdOutlineSupervisorAccount,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { HiOutlineRefresh, HiOutlineDocumentReport } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";

export const propertyNameOptions = [
  { value: "property 1", label: "property 1 (ID:1224)" },
  { value: "property 2", label: "property 2 (ID:234)" },
  { value: "property 3", label: "property 3 (ID:545)" },
];

export const sourceOptions = [
  { value: "source 1", label: "source 1" },
  { value: "source 2", label: "source 2" },
  { value: "source 3", label: "source 3" },
];

export const tenantOptions = [
  { value: "tenant 1", label: "tenant 1" },
  { value: "tenant 2", label: "tenant 2" },
  { value: "tenant 3", label: "tenant 3" },
];

export const links = [
  {
    links: [
      {
        linkTitle: "Dashboard",
        name: "dashboard",
        icon: <MdOutlineDashboard />,
      },
    ],
  },

  {
    title: "Booking",
    links: [
      {
        linkTitle: "Bookings",
        name: "bookings",
        icon: <AiOutlineCalendar />,
      },
    ],
  },
  {
    links: [
      {
        linkTitle: "Messages",
        name: "Messages",
        icon: <BiEnvelope />,
      },
    ],
  },
  {
    title: "Property Management",
    links: [
      {
        linkTitle: "Owners",
        name: "owners",
        icon: <MdOutlinePersonOutline />,
      },
      {
        linkTitle: "Tenants",
        name: "tenants",
        icon: <BsPeople />,
      },
      {
        linkTitle: "Properties",
        name: "properties",
        icon: <BiBuildingHouse />,
      },
      {
        linkTitle: "Sources",
        name: "sources",
        icon: <VscSourceControl />,
      },
      {
        linkTitle: "Maintenance",
        name: "maintenance",
        icon: <TiSpanner />,
      },
      {
        linkTitle: "Evaluation",
        name: "evaluation",
        icon: <RiPhoneFindLine />,
      },
    ],
  },
  {
    title: "Reports",
    links: [
      {
        linkTitle: "Reports",
        name: "reports",
        icon: <HiOutlineDocumentReport />,
      },
    ],
  },
];
