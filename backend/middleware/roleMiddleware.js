import express from 'express';
import cors from 'cors';
import mysql2 from 'mysql2';
import bodyParser from 'body-parser';

import db from './config/db.js';

import {gen} from './controllers/hashgen.js';
import passport from './auth/stratergy.js';


const checkHRManager = (req, res, next) => {
    console.log('Role ', req.user.role_id);
    if (req.user.role_id === '1') {
      return next();
    }
    return res.status(403).json({ message: 'Forbidden' });
  }
  
  const checkAdmin = (req, res, next) => {
    console.log('Role ', req.user.role_id);
    if (req.user.role_id === '0') {
      return next();
    }
    return res.status(403).json({ message: 'Forbidden' });
  }