import React, { useState, useEffect } from 'react';
import { Dropdown, Row, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PageTitle from '../../layouts/PageTitle';
import { IMAGES } from '../../constant/theme';
import { gridDataBlog } from '../staff/GridData';
import { DatePicker } from 'rsuite';






const holidayTable = [
    { id: 1, subject: "English", date: "2026-07-22", time: "09:00", name: 'Garrett Winters', profile: IMAGES.smallpic1, department: 'Accountant', gender: 'Female', education: 'B.A, B.C.A', mobile: '987 654 3210', email: 'info@example.com', join: '2020/07/25' },
    { id: 10, subject: "Math", date: "2026-07-22", time: "10:00", name: 'Airi Satou', profile: IMAGES.smallpic2, department: 'Junior Technical', gender: 'Female', education: 'B.A, B.C.A', mobile: '987 654 3210', email: 'info@example.com', join: '2021/11/28' },
    { id: 3, subject: "Science", date: "2026-07-22", time: "12:00", name: 'Tiger Nixon', profile: IMAGES.smallpic3, department: 'Clerk', gender: 'Female', education: 'B.Sc', mobile: '123 456 7890', email: 'info@example.com', join: '2019/04/25' },
    { id: 4, subject: "English", date: "2026-07-22", time: "09:00", name: 'Cedric Kelly', profile: IMAGES.smallpic4, department: 'Developer', gender: 'Female', education: 'BTech', mobile: '123 456 7890', email: 'info@example.com', join: '2018/04/25' },
    { id: 2, subject: "Math", date: "2026-07-22", time: "09:00", name: 'Gavin Joyce', profile: IMAGES.smallpic5, department: 'Specialist', gender: 'Female', education: 'B.Com, M.Com', mobile: '(123) 4567 890', email: 'info@example.com', join: '2020/04/25' },
    { id: 9, subject: "Science", date: "2026-07-22", time: "09:00", name: 'Angelica Ramos', profile: IMAGES.smallpic6, department: 'Executive Officer', gender: 'Male', education: 'BTech, MTech', mobile: '987 654 3210', email: 'info@example.com', join: '2015/08/25' },
    { id: 7, subject: "English", date: "2026-07-22", time: "09:00", name: 'Paul Byrd', profile: IMAGES.smallpic7, department: 'Financial Officer', gender: 'Female', education: 'B.Sc, M.Sc', mobile: '987 654 3210', email: 'info@example.com', join: '2023/09/01' },
    { id: 8, subject: "English", date: "2026-07-22", time: "09:00", name: 'Ashton Cox', profile: IMAGES.smallpic8, department: 'Junior Technical', gender: 'Female', education: 'BTech', mobile: '(123) 4567 890', email: 'info@example.com', join: '2015/02/22' },
    { id: 6, subject: "Math", date: "2026-07-22", time: "09:00", name: 'Rhona Davidson', profile: IMAGES.smallpic9, department: 'Sales Assistant', gender: 'Female', education: 'B.Sc', mobile: '(123) 4567 890', email: 'info@example.com', join: '2018/06/12' },
    { id: 5, subject: "Science", date: "2026-07-22", time: "13:00", name: 'Colleen Hurst', profile: IMAGES.smallpic10, department: 'Librarian', gender: 'Female', education: 'B.Com, M.Com', mobile: '(123) 4567 890', email: 'info@example.com', join: '2021/11/19' },
    { id: 11, subject: "English", date: "2026-07-22", time: "10:00", name: 'Tiger Nixon', profile: IMAGES.smallpic3, department: 'Specialist', gender: 'Female', education: 'B.Sc', mobile: '123 456 7890', email: 'info@example.com', join: '2019/04/25' },
    { id: 12, subject: "Math", date: "2026-07-22", time: "09:00", name: 'Cedric Kelly', profile: IMAGES.smallpic4, department: 'Executive Officer', gender: 'Female', education: 'BTech', mobile: '123 456 7890', email: 'info@example.com', join: '2018/04/25' },
    { id: 13, subject: "Science", date: "2026-07-22", time: "12:00", name: 'Gavin Joyce', profile: IMAGES.smallpic5, department: 'Financial Officer', gender: 'Female', education: 'B.Com, M.Com', mobile: '(123) 4567 890', email: 'info@example.com', join: '2020/04/25' },
    { id: 14, subject: "English", date: "2026-07-22", time: "13:00", name: 'Angelica Ramos', profile: IMAGES.smallpic6, department: 'Junior Technical', gender: 'Female', education: 'BTech, MTech', mobile: '987 654 3210', email: 'info@example.com', join: '2015/08/25' },
    { id: 15, subject: "Math", date: "2026-07-22", time: "09:00", name: 'Paul Byrd', profile: IMAGES.smallpic7, department: 'Sales Assistant', gender: 'Male', education: 'B.Sc, M.Sc', mobile: '987 654 3210', email: 'info@example.com', join: '2023/09/01' },
    { id: 16, subject: "Science", date: "2026-07-22", time: "13:00", name: 'Ashton Cox', profile: IMAGES.smallpic8, department: 'Specialist', education: 'BTech', gender: 'Female', mobile: '(123) 4567 890', email: 'info@example.com', join: '2015/02/22' },
    { id: 17, subject: "English", date: "2026-07-22", time: "09:00", name: 'Rhona Davidson', profile: IMAGES.smallpic9, department: 'Executive Officer', education: 'B.Sc', gender: 'Female', mobile: '(123) 4567 890', email: 'info@example.com', join: '2018/06/12' },

];

// const holidayTable = [

//     { id: 1, name: "John", subject: "English", day: "Monday", time: "09:00" },
//     { id: 2, name: "Emma", subject: "English", day: "Monday", time: "09:00" },
//     { id: 3, name: "David", subject: "Math", day: "Tuesday", time: "10:00" }

// ]

const theadData = [
    { heading: 'Profile', sortingVale: "profile" },
    { heading: 'Name', sortingVale: "name" },
    { heading: 'Gender', sortingVale: "gender" },
    { heading: 'subject', sortingVale: "subject" },
    { heading: 'date', sortingVale: "date" },
    { heading: 'time', sortingVale: "time" },
    { heading: 'Education', sortingVale: "education" },
    { heading: 'Mobile', sortingVale: "mobile" },
    { heading: 'Action', sortingVale: "action" }
    // { heading: 'Department', sortingVale: "department" },
    // { heading: 'Email', sortingVale: "email" },
    // { heading: 'Joining Date', sortingVale: "join" },
];


const AllTeacher = () => {
    // search by date --day--time
    const [subject, setSubject] = useState("");
    // const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    // const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState("2026-07-22");

    const [sort, setSortata] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);







    useEffect(() => {

        const result = holidayTable.filter(item => {

            return (

                (subject === "" || item.subject === subject) &&

                (!selectedDate || item.date === selectedDate) &&

                (time === "" || item.time === time)

            );

        });

        setFeeDate(result);

        setCurrentPage(1);

    }, [subject, selectedDate, time]);

    const resetFilter = () => {
        setSubject("");
        // setSelectedDate(null);
        setSelectedDate("2026-07-22");
        setTime("");
        setFeeDate([...holidayTable]);
        setCurrentPage(1);
    }

    // useEffect(() => {
    //     setData(document.querySelectorAll('#holidayList tbody tr'))
    // }, [test])


    // activePag.current === 0 && chageData(0, sort)

    // let paggination = Array(Math.ceil(data.length / sort))
    //     .fill()
    //     .map((_, i) => i + 1)


    // const onClick = (i) => {
    //     activePag.current = i
    //     chageData(activePag.current * sort, (activePag.current + 1) * sort)
    //     settest(i)
    // }

    const [feeData, setFeeDate] = useState([...holidayTable]);
    const [iconData, setIconDate] = useState({ complete: false, ind: Number });
    const pageSize = Number(sort);
    const totalPages = Math.ceil(feeData.length / pageSize);
    const indexOfLast = currentPage * pageSize;
    const indexOfFirst = indexOfLast - pageSize;
    const currentTeachers = feeData.slice(indexOfFirst, indexOfLast);

    function SotingData(name) {
        const sortedPeople = [...feeData];
        switch (name) {
            case "rollno":
                sortedPeople.sort((a, b) => {
                    return a.rollno < b.rollno ? -1 : 1
                });
                break;
            case "name":
                sortedPeople.sort((a, b) => {
                    return iconData.complete ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                });
                break;
            case "department":
                sortedPeople.sort((a, b) => {
                    return iconData.complete ? a.department.localeCompare(b.department) : b.department.localeCompare(a.department)
                });
                break;
            case "gender":
                sortedPeople.sort((a, b) => {
                    return iconData.complete ? a.gender.localeCompare(b.gender) : b.gender.localeCompare(a.gender)
                });
                break;
            case "subject":
                sortedPeople.sort((a, b) => {
                    return iconData.complete
                        ? a.subject.localeCompare(b.subject)
                        : b.subject.localeCompare(a.subject);
                });
                break;
            case "date":

                sortedPeople.sort((a, b) => {

                    const d1 = new Date(a.date);

                    const d2 = new Date(b.date);

                    return iconData.complete
                        ? d1 - d2
                        : d2 - d1;

                });

                break;
            case "time":

                sortedPeople.sort((a, b) => {
                    return iconData.complete
                        ? a.time.localeCompare(b.time)
                        : b.time.localeCompare(a.time);
                });

                break;
            case "education":
                sortedPeople.sort((a, b) => {
                    return iconData.complete ? a.education.localeCompare(b.education) : b.education.localeCompare(a.education)
                });
                break;
            case "mobile":
                sortedPeople.sort((a, b) => {
                    return iconData.complete ? a.mobile.localeCompare(b.mobile) : b.mobile.localeCompare(a.mobile)
                });
                break;
            case "join":
                sortedPeople.sort((a, b) => {
                    return iconData.complete ? a.join.localeCompare(b.join) : b.join.localeCompare(a.join)
                });
                break;
            default:
                break;
        }
        setFeeDate(sortedPeople);
        setCurrentPage(1);
    }
    
    return (
        <>
            <PageTitle activeMenu={"All Teachers"} motherMenu={"Teacher"} />
            <Row>
                <Tab.Container defaultActiveKey={"List"}>
                    <div className="col-lg-12">
                        <Nav as="ul" className="nav nav-pills mb-3">
                            <Nav.Item as="li"><Nav.Link eventKey="List" className="me-1">List View</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link eventKey="Grid" >Grid View</Nav.Link></Nav.Item>
                        </Nav>
                    </div>
                    <div className="col-lg-12">
                        <Tab.Content className="row tab-content">
                            <Tab.Pane eventKey="List" className="col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">All Teachers </h4>
                                        <Link to={"/add-teacher"} className="btn btn-primary">+ Add New</Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <div id='holidayList' className='dataTables_wrapper no-footer'>
                                                <div className='justify-content-between d-sm-flex'>
                                                    <div className='dataTables_length'>
                                                        <label className='d-flex align-items-center'>
                                                            Show
                                                            <Dropdown className='search-drop'>
                                                                <Dropdown.Toggle as="div" className="search-drop-btn">
                                                                    {sort}
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item onClick={() => { setSortata('10'); setCurrentPage(1); }}>10</Dropdown.Item>
                                                                    <Dropdown.Item onClick={() => { setSortata('20'); setCurrentPage(1); }}>20</Dropdown.Item>
                                                                    <Dropdown.Item onClick={() => { setSortata('30'); setCurrentPage(1); }}>30</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                            entries
                                                        </label>
                                                    </div>
                                                    <div className="dataTables_filter">
                                                        <label>Search :
                                                            {/* <input type="search" className="" placeholder="" 
                                                                onChange={DataSearch}
                                                            /> */}
                                                        </label>
                                                        <div className="d-sm-flex text-center justify-content-between align-items-center">

                                                            <select
                                                                className="form-select me-2  mb-3"
                                                                value={subject}
                                                                onChange={(e) => setSubject(e.target.value)}
                                                            >
                                                                <option value="">Subject</option>
                                                                <option>English</option>
                                                                <option>Math</option>
                                                                <option>Science</option>
                                                            </select>
                                                            
                                                            {/* <input
                                                                type="date"
                                                                className="form-control me-2 mb-3"
                                                                
                                                            /> */}
                                                            <div className="date-bg-light me-2  mb-3 w-100">
                                                                <DatePicker
                                                                    placeholder="Date"
                                                                    className="picker-suit"
                                                                    value={selectedDate ? new Date(selectedDate) : null}
                                                                    onChange={(value) => {

                                                                        if (!value) {
                                                                            setSelectedDate("");
                                                                            return;
                                                                        }

                                                                        const formatted =
                                                                            value.getFullYear() +
                                                                            "-" +
                                                                            String(value.getMonth() + 1).padStart(2, "0") +
                                                                            "-" +
                                                                            String(value.getDate()).padStart(2, "0");

                                                                        setSelectedDate(formatted);

                                                                    }}
                                                                />
                                                                {/* <div className="icon"><i className="far fa-calendar" /></div> */}
                                                            </div>
                                                            <select
                                                                className="form-select me-2  mb-3"
                                                                value={time}
                                                                onChange={(e) => setTime(e.target.value)}
                                                            >
                                                                <option value="">Time</option>

                                                                <option>09:00</option>
                                                                <option>10:00</option>
                                                                <option>11:00</option>
                                                                <option>12:00</option>
                                                                <option>13:00</option>
                                                            </select>
                                                            {/* <button
                                                                className="btn btn-primary flex-shrink-0 mb-3"
                                                                onClick={filterTeachers}
                                                            >
                                                                Find Teacher
                                                            </button> */}

                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary mb-3"
                                                                onClick={resetFilter}
                                                            >
                                                                Reset
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                                <table id="example4" className="display dataTable no-footer w-100" >
                                                    <thead>
                                                        <tr>
                                                            {theadData.map((item, ind) => (
                                                                <th key={ind}
                                                                    onClick={() => { SotingData(item.sortingVale); setIconDate(prevState => ({ complete: !prevState.complete, ind: ind })) }}
                                                                >{item.heading}
                                                                    <span>
                                                                        {ind !== iconData.ind &&
                                                                            <i className="fa fa-sort ms-2 fs-12" style={{ opacity: '0.3' }} />
                                                                        }
                                                                        {ind === iconData.ind && (
                                                                            iconData.complete ?
                                                                                <i className="fa fa-arrow-down ms-2 fs-12" style={{ opacity: '0.7' }} />
                                                                                :
                                                                                <i className="fa fa-arrow-up ms-2 fs-12" style={{ opacity: '0.7' }} />
                                                                        )
                                                                        }
                                                                    </span>
                                                                </th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            feeData.length > 0
                                                                ? currentTeachers.map((data, ind) => (
                                                                    <tr key={ind}>
                                                                        <td><img className="rounded-circle" width="35" src={data.profile} alt="" /> </td>
                                                                        <td width="350">{data.name}</td>
                                                                        <td>{data.gender}</td>
                                                                        <td>{data.subject}</td>
                                                                        <td width={220}>{data.date}</td>
                                                                        <td>{data.time}</td>
                                                                        <td>{data.education}</td>
                                                                        {/* <td><Link to={"#"}><strong>{data.email}</strong></Link></td> */}
                                                                        <td width="200"><Link to={"#"}><strong>{data.mobile}</strong></Link></td>
                                                                        <td width="350">
                                                                            <Link to={"/edit-teacher"} className="btn btn-xs sharp btn-primary me-1"><i className="fa fa-pencil" /></Link>
                                                                            <Link to={"/teacher-profile"} className="btn btn-xs sharp btn-light me-1"><i className="fa fa-user" /></Link>
                                                                            <Link to={"#"} className="btn btn-xs sharp btn-danger"><i className="fa fa-trash" /></Link>
                                                                        </td>
                                                                    </tr>
                                                                ))


                                                                : <tr>

                                                                    <td colSpan="9" className="text-center py-5">

                                                                        <h5>No teachers available.</h5>

                                                                    </td>

                                                                </tr>
                                                        }
                                                    </tbody>
                                                </table>
                                                <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                                                    <div className='dataTables_info'>
                                                        Showing {feeData.length === 0 ? 0 : indexOfFirst + 1} to {Math.min(indexOfLast, feeData.length)} of {feeData.length} entries
                                                        {/* Showing {activePag.current * sort + 1} to{' '}
                                                        {data.length > (activePag.current + 1) * sort
                                                            ? (activePag.current + 1) * sort
                                                            : data.length}{' '}
                                                        of {data.length} entries */}
                                                    </div>
                                                    <div className="dataTables_paginate paging_simple_numbers">

                                                        <button
                                                            className="paginate_button previous"
                                                            disabled={currentPage === 1}
                                                            onClick={() => setCurrentPage(currentPage - 1)}
                                                        >
                                                            Previous
                                                        </button>

                                                        {

                                                            [...Array(totalPages)].map((_, i) => (

                                                                <button
                                                                    key={i}
                                                                    className={`paginate_button ${currentPage === i + 1 ? "current" : ""
                                                                        }`}
                                                                    onClick={() => setCurrentPage(i + 1)}
                                                                >
                                                                    {i + 1}
                                                                </button>

                                                            ))

                                                        }

                                                        <button
                                                            className="paginate_button next"
                                                            disabled={currentPage === totalPages}
                                                            onClick={() => setCurrentPage(currentPage + 1)}
                                                        >
                                                            Next
                                                        </button>

                                                    </div>
                                                    {/* <div
                                                        className='dataTables_paginate paging_simple_numbers'
                                                        id='example5_paginate'
                                                    >
                                                        <Link
                                                            className='paginate_button previous disabled'
                                                            to='#'
                                                            onClick={() =>
                                                                activePag.current > 0 && onClick(activePag.current - 1)
                                                            }
                                                        >
                                                            Previous
                                                        </Link>
                                                        <span>
                                                            {paggination.map((number, i) => (
                                                                <Link
                                                                    key={i}
                                                                    to='#'
                                                                    className={`paginate_button  ${activePag.current === i ? 'current' : ''
                                                                        } `}
                                                                    onClick={() => onClick(i)}
                                                                >
                                                                    {number}
                                                                </Link>
                                                            ))}
                                                        </span>
                                                        <Link
                                                            className='paginate_button next'
                                                            to='#'
                                                            onClick={() =>
                                                                activePag.current + 1 < paggination.length &&
                                                                onClick(activePag.current + 1)
                                                            }
                                                        >
                                                            Next
                                                        </Link>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Grid" className="col-lg-12">
                                <div className="row">
                                    {gridDataBlog.map((item, ind) => (
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={ind}>
                                            <div className="card card-profile">
                                                <div className="card-header justify-content-end pb-0 border-0">
                                                    <Dropdown>
                                                        <Dropdown.Toggle as="button" className="btn btn-link i-false" type="button">
                                                            <span className="dropdown-dots fs--1"></span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu align="end" className="dropdown-menu dropdown-menu-right border py-0">
                                                            <div className="py-2">
                                                                <Link to={"/edit-teacher"} className="dropdown-item">Edit</Link>
                                                                <Link to={"#"} className="dropdown-item text-danger">Delete</Link>
                                                            </div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className="card-body pt-2">
                                                    <div className="text-center">
                                                        <div className="profile-photo">
                                                            <img src={item.image} width="100" className="img-fluid rounded-circle" alt="" />
                                                        </div>
                                                        <h3 className="mt-4 mb-1">{item.name}</h3>
                                                        <p className="text-muted">{item.subject}</p>
                                                        <ul className="list-group mb-3 list-group-flush">
                                                            {item.content.map((data, ind) => (
                                                                <li className="list-group-item px-0 d-flex justify-content-between" key={ind}>
                                                                    <span className="mb-0">{data.title} :</span><strong>{data.subtitle}</strong>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <Link to={"/teacher-profile"} className="btn btn-outline-primary btn-rounded mt-3 px-4">Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </Row>
        </>
    );
};

export default AllTeacher;