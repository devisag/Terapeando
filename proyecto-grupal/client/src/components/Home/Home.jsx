import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getPsychologistByStatus,
  getAllPsychologist,
  getUserPsychologistByName,
  clearPsychologistList,
} from "../../redux/actions";
import NavbarHome from "../NavbarHome/NavbarHome";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CardPsychologist from "../CardPsychologist/CardPsychologist";
import "./Home.css";
import Loader from "../Loader/Loader";
import smoothscroll from "../../animations";
import Paged from "../Paged/Paged";
import { BsSearch } from "react-icons/bs";
import { Text, Container, Stack, Button, Input } from "@chakra-ui/react";
import FiltersPsichologist from "../FilterPsichologist/FilterPsichologist";
import AdminSearchbar from "../AdminPanel/AdminSearchbar/AdminSearchbar.jsx";
import Chat from '../Chat/Chat'
import { getScheduleAsPsychologist, getScheduleAsClient } from '../../redux/actions';


export default function Home() {
  const AllPsychologist = useSelector((state) => state.allUsersPsichologists);
  const adminSearchbar = useSelector((state) => state.adminSearchbar);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);

  const tokenClient = window.localStorage.getItem('tokenClient')
  const tokenPsychologist = window.localStorage.getItem('tokenPsychologist')

  const search = useLocation().search; 
  const role = new URLSearchParams(search).get('role');
  const token = new URLSearchParams(search).get('token');

useEffect(() => {
  const setToken =  role === 'client' ? window.localStorage.setItem('tokenClient', token) : role === 'psychologist' ? window.localStorage.setItem('tokenPsychologist', token) :  null ;
}, [])

  useEffect(() => {
    dispatch(getPsychologistByStatus());
    smoothscroll();
  }, [dispatch]);

  useEffect(() => {
    if (adminSearchbar.length !== 0) {
      dispatch(clearPsychologistList());
      dispatch(getUserPsychologistByName(adminSearchbar));
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 1500);
    }
  }, [dispatch, adminSearchbar]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [dispatch]);

  /* Paginado */
  const [page, setPage] = useState(1);
  const [postPage, setPostPage] = useState(5);
  const quantityPostPage = page * postPage;
  const firstPage = quantityPostPage - postPage;
  const AllPsychologists = AllPsychologist.slice(firstPage, quantityPostPage);

  const paged = function (pageNumber) {
    setPage(pageNumber);
    smoothscroll();
  };

  const handleSubmit = () => {
    dispatch(getPsychologistByStatus())
    setPage(1)
  }

  return (
    <Stack minHeight='100%' maxHeight='fit-content' justify='space-between'>
      <Stack>
        {
          tokenClient || tokenPsychologist ? <NavbarHome /> : <NavBar />
        }
        <div className="cardContainer">
          <Stack
            mt="1em"
            mb="1em"
            width="100%"
            direction="row"
            justifyContent="space-between"
            align='center'
          >
            <Text fontWeight="semibold" fontSize="3xl" color="green.300">
              Psicólogos
            </Text>

            <Stack direction='row' width='50%' justify='right'>
              <AdminSearchbar width='50%' />
              <Button variant='outline' width='40%' colorScheme='teal' onClick={handleSubmit}>
                Todos los psicólogos
              </Button>
            </Stack>

          </Stack>

          <Stack width="100%" direction="row">
            <FiltersPsichologist setPage={setPage}/>
          </Stack>
          {
            loader
              ? <Loader />
              : AllPsychologist && AllPsychologist.length > 0
                ? AllPsychologists.map(el => {
                  return (
                    <CardPsychologist
                      key={el._id}
                      firstName={el.firstName}
                      lastName={el.lastName}
                      profileImage={el.profileImage}
                      rating={el.rating}
                      education={el.education}
                      about={el.about}
                      IdUserPsychologist={el._id}
                      Specialties={el.Specialties}
                    />
                  )
                })
                : loader ? <Loader></Loader> : <Stack height={'100%'} justify={"flex-start"} mt='7em' ><Text fontSize={'xl'}>No hay resultados</Text></Stack>
          }
        </div>
        <Chat/>
      </Stack>
      <Stack>
        <Paged
          postPage={postPage}
          allPosts={AllPsychologist.length}
          paged={paged}
          page={page}
          setPage={setPage}
        />
        <Footer />
      </Stack>
    </Stack>
  );
}
