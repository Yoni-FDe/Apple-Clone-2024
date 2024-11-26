// axios is used to make HTTP requests to the backend API.Install it like npm i axios
// These are all of api function : which is api.jsx

import axios from 'axios';

// This is backend API base URL
const API_BASE_URL = 'http://localhost:3004/get-product';  

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data.tasks;
};

// Get a single task by ID
export const getTaskById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Create a new task
export const createTask = async (task) => {
  const response = await axios.post(API_BASE_URL, task);
  return response.data;
};

// Update a task by ID
export const updateTask = async (id, updatedTask) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, updatedTask);
  return response.data;
};

// Delete a task by ID
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};


// Now create React component to use API functions to display add, update, and delete tasks.


// Example : for forntend
// post https://amazone.com/orders
// post is type , get type etc
// orders is url path
// amazone.com is Domain name
// Types is Post,Get,Put,Patch,Delete
// URL Path is anything what you want like /Orders, /youtubevideo
// Url Path also REST (Reprsentational state Transfer)

//Example: for in Backend API to create and save in database
 app.post('/orders',(request,response) => {
    const order=createOrder(request);
    database.save(order);
    response.send('order confirmed');
 });

 //Example; To get data from Backend withuse api request response
  app.get('/orders',(request,response) => {
    const orders = database.getOrder();
    response.json(orders);
  });

  // Example: To delete request from database
  app.delete('./orders/:id',(request,response) => {
    database.cancleOrder(request);
    response.json('Order canceled.');
  });


  // Cloud Computing Companies 
//   1. aws - Amazon web services.
//   2. GCP - Google Cloud platform
//   3. MA - Microsoft Azure

// IaaS - is Infrastructural as a service which is rent cloud web services
// VM- virtual machine 

// Example : PaaS 
// PaaS - is platform as a service
// aws - Amazon web services is use AWS Elastic Beanstalk
// GCP - Google Cloud platform is use App Engine
// MA - Microsoft Azure is use App Service

// Microservices 

// twilio is use for email services 
// this twilio email services outside from api application of backend is called SaaS
// SaaS is software as a services example twilio

// In general Cloud Computing have three phase
//  1. IaaS
//  2. PaaS
//  3. Saas

// Primary Database 


// Install json server
