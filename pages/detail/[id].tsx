import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { GoVerified } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp } from 'react-icons/hi';
import { BASE_URL } from '../../utils';
import axios from 'axios';

import { Video } from '../../types';

interface IProps {
  postDetails: Video,
}

const Detail = ({ postDetails }) => {
  return (
    <div>Detail</div>
  )
}

export const getServerSideProps = async ({
  params: {id}
}: {
  params: { id: string}
}) => {
  const { data } = await axios.get(`${BASE_URL}/api/post/${id}`) 

  return {
    props: { postDetails: data }
  }
}

export default Detail