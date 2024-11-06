import {
  MdOutlineSchool,
  MdQuestionMark,
  MdLocationPin,
  MdOutlineWorkOutline,
  MdOutlineNotes,
} from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const SchoolIcon = ({ className = "" }) => (
  <MdOutlineSchool className={className} />
);

export const WorkIcon = ({ className = "" }) => (
  <MdOutlineWorkOutline className={className} />
);

export const QuestionIcon = ({ className = "" }) => (
  <MdQuestionMark className={className} />
);

export const LocationIcon = ({ className = "" }) => (
  <MdLocationPin className={className} />
);

export const ClockIcon = ({ className = "" }) => (
  <AiOutlineClockCircle className={className} />
);

export const NotesIcon = ({ className = "" }) => (
  <MdOutlineNotes className={className} />
);

export const PencilIcon = ({ className = "" }) => (
  <GoPencil className={className} />
);

export const LinkedInIcon = ({ className = "" }) => (
  <FaLinkedin className={className} />
);

export const InstagramIcon = ({ className = "" }) => (
  <FaInstagram className={className} />
);
