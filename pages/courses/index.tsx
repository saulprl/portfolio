import { FC } from "react";

import Head from "next/head";

import MainContent from "../../components/UI/MainContent";
import CourseList from "../../components/Courses/CourseList";

import { loadCourses } from "../../lib/loadCourses";

import type { Course } from "../../models/Course";
import { Box } from "@mui/material";

import classes from "../../styles/Courses.module.css";
import { GetStaticProps } from "next";

interface CourseData {
  page: { title: string; description: string };
  display: {
    courseCompleted: string;
    courseOngoing: string;
    showCertificate: string;
  };
  courses: Course[];
}

interface Props {
  data: CourseData;
}

const CoursesPage: FC<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>{props.data.page.title}</title>
        <meta name="description" content={props.data.page.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent title={props.data.page.title}>
        <Box component="section" className={classes["page-content"]}>
          <CourseList courses={props.data.courses} dictionary={props.data.display} />
        </Box>
      </MainContent>
    </>
  );
};

interface JSONCourseData {
  "en-US": CourseData;
  "es-MX": CourseData;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const jsonData: JSONCourseData = await loadCourses();
  const data = jsonData[context.locale! as keyof JSONCourseData];

  return {
    props: {
      data,
    },
  };
};

export default CoursesPage;
