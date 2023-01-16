import { FC, useState } from "react";

import { List } from "@mui/material";

import type { Course } from "../../models/Course";

import ImageViewer from "../UI/ImageViewer";
import CourseItem from "./CourseItem";

interface Dictionary {
  courseCompleted: string;
  courseOngoing: string;
  showCertificate: string;
}

interface Props {
  courses: Course[];
  dictionary: Dictionary;
}

const CourseList: FC<Props> = (props: Props) => {
  const [openModal, setOpenModal] = useState<{
    open: boolean;
    name: string;
    certificate: string | null;
  }>({
    open: false,
    name: "Course",
    certificate: "",
  });

  const closeModalHandler = () => {
    setOpenModal((prevState) => ({
      ...prevState,
      open: false,
    }));
  };

  const openModalHandler = (courseName: string, certificate: string | null) => {
    setOpenModal({
      name: courseName,
      open: true,
      certificate: certificate,
    });
  };

  return (
    <>
      <List disablePadding>
        {props.courses.map((course) => (
          <CourseItem
            key={course.id}
            name={course.name}
            status={course.status}
            certificate={course.certificate}
            description={course.description}
            link={course.link}
            onShowCertificate={openModalHandler.bind(
              null,
              course.name,
              course.certificate
            )}
            dictionary={props.dictionary}
          />
        ))}
      </List>
      <ImageViewer
        name={openModal.name}
        open={openModal.open}
        onClose={closeModalHandler}
        images={[openModal.certificate!]}
      />
    </>
  );
};

export default CourseList;
