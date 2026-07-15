import React from 'react';
import PageTitle from '../../layouts/PageTitle';
import { StaffProfile } from '../staff/ProfileStaff';

const AboutParent = () => {
    return (
        <>
            <PageTitle activeMenu={"About Parent"} motherMenu={"Parents"}/>
            <StaffProfile />
        </>
    );
};

export default AboutParent;