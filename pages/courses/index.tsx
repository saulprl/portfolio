import { FC } from "react";

import Head from "next/head";

import MainContent from "../../components/UI/MainContent";
import CourseList from "../../components/Courses/CourseList";

import { loadCourses } from "../../lib/loadCourses";

import type { Course } from "../../models/Course";
import { Box } from "@mui/material";

import classes from "../../styles/Courses.module.css";

interface CourseData {
  courses: Course[];
}

interface Props {
  data: CourseData;
}

const CoursesPage: FC<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>Courses</title>
        <meta
          name="description"
          content="A page dedicated to saulprl's completed and ongoing courses."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title="Courses">
        <Box component="section" className={classes["page-content"]}>
          <CourseList courses={props.data.courses} />
        </Box>
      </MainContent>
    </>
  );
};

export const getStaticProps = async () => {
  const data: CourseData = await loadCourses();

  return {
    props: {
      data,
    },
  };
};

export default CoursesPage;
