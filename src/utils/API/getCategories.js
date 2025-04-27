import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCategories = async () => {
    const response = await axios.get('');
    return response.data;
}