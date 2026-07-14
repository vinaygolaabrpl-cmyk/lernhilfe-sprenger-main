import React from 'react';
import PageTitle from '../../layouts/PageTitle';
import {StaffProfile} from '../staff/ProfileStaff';

const ProfileProfessor = () => {
    return (
        <>
            <PageTitle activeMenu={"Teacher Profile"} motherMenu={"Teachers"}/>   
            <StaffProfile />
        </>
    );
};

export default ProfileProfessor;