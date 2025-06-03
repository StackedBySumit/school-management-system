import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { SiGoogleclassroom } from "react-icons/si";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineSubject } from "react-icons/md";
import { MdOutlinePlayLesson } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { MdOutlineAssignment } from "react-icons/md";
import { SiBasicattentiontoken } from "react-icons/si";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import logo from "../image/logo.webp"


function Menu() {
  return (
    <div className="min-h-screen sticky top-0">
      {/* LOGO */}
      <div className="flex items-center justify-evenly h-20">
        <img src={logo} className="rounded-full w-24 h-24 mt-6" alt="LOGO" />
      </div>
      <div>
      <h1 className="text-2xl font-semibold text-orange-400 mt-8 ms-10">JS HEAVEN</h1>
      </div>
      {/* MENU */}
      <div className="flex flex-col w-full text-center mt-4">
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <IoHomeOutline className="inline-block text-2xl" />
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Home</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <RiGraduationCapLine className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Teachers</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <PiStudentBold className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Students</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <IoPeopleOutline  className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Parents</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <MdOutlineSubject className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Subjects</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <SiGoogleclassroom className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Classes</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <MdOutlinePlayLesson className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Lessons</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <PiExam className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Exams</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <MdOutlineAssignment className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Assignments</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <LuNotebookPen className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Results</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <SiBasicattentiontoken className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Attendance</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <MdOutlineEmojiEvents className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Events</span>
          </a>
        </div>
        <div>
          <a href="#" className="btn btn-ghost w-4/5 flex justify-evenly">
          <FaRegMessage className="inline-block text-xl"/>
            <span className="hidden lg:inline-block text-xl lg:text-sm font-thin">Messages</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;