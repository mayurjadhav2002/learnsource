# Learnsource - Your Gateway to Learning and Skill Development

Learnsource is a dedicated platform that empowers learners and aspiring professionals by providing access to premium software, free courses, web scraping resources, and essential educational tools. Our mission is to bridge educational gaps and help you unlock your full potential.

## Note
if you are visiting demo website at https://learnsource1.netlify.app/ please be patient as the backend is deployed on render. So it takes time to reboot the Virtual environment on Render. Once the backend is ready you'll able to see the demo site seamlessly.
\
If you want to check the uptime of the backend please visit - [Backend Site](https://qbytespace-backend.onrender.com/software)
## Installation
* Clone the repo
```bash
git clone https://github.com/mayurjadhav2002/learnsource
```
* backend
```bash
cd Backend
npm install 
node index.js
```

* frontend
```bash
npm install
npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
* Backend
```env
REACT_APP_MONGO_URI=YOUR_MONGODB_URL
TOKEN_KEY=YOUR_TOKEN_KEY_FOR_ENCRIPTION

```

* Frontend
```env

REACT_APP_BASE_BACKEND_URL=BACKEND_URL
REACT_APP_MONGO_URI=YOUR_MONGODB_URL
REACT_APP_BASE_URL=localhost:3000 OR YOUR_DEPLOYMENT URL

```


## Folder Structure

The project is organized into three main components:

1. **Backend:** This directory contains all the APIs and code for the backend of the application. The backend is deployed on Vercel and can be accessed at [https://qbytespace-backend.onrender.com/](https://qbytespace-backend.onrender.com/).

2. **Frontend:** The root folder houses the frontend of the application. It includes the React application files found in the `src` and `public` directories.

3. **Python Web Scraping Program:** The Python web scraping program is designed to scrape data from websites and store it in the database.

The structure provides a clear separation of the backend, frontend, and the web scraping component, making it easy to work on and maintain each part of the project individually.


# Demo 
[Find the Demo of the Application on this link](https://learnsource1.netlify.app/)

## Future Additions

We are committed to the ongoing development and improvement of Learnsource. In the near future, we have plans to introduce the following features:

1. **User Login and Contribution:** We aim to create a global community of learners and professionals who can actively contribute to Learnsource. The introduction of user login functionality will enable users to submit their blogs, posts, and internship opportunities, enriching the platform with diverse and valuable content. This will provide a dynamic and collaborative environment for knowledge sharing and career growth.

2. **Enhanced Personalization:** We're working on features that will allow users to customize their learning experience. Personalized recommendations, progress tracking, and the ability to bookmark favorite resources will make it easier for individuals to tailor their learning journey to their specific needs and interests.

3. **Discussion Forums:** We plan to implement discussion forums where users can engage in meaningful conversations, seek advice, and share insights related to various courses, software tools, and career development. These forums will foster a sense of community and facilitate knowledge exchange.

4. **Improved Web Scraping:** We'll continue to refine the web scraping capabilities of the platform to ensure that users have access to the most up-to-date and relevant information about free courses, certifications, and other resources available online.

These future additions are part of our ongoing commitment to making Learnsource an even more valuable resource for learners and professionals worldwide. We look forward to your continued support and feedback as we work on these enhancements.


## Screenshots

![App Screenshot](https://i.postimg.cc/x8j8WvQ6/scrnli-12-10-2023-08-31-53.png)

![App Screenshot](https://i.postimg.cc/vBbZVr4G/scrnli-12-10-2023-08-37-25.png)

## Tech Stack

**Frontend:** React, TailwindCSS, @headlessui, javascript, flowbite, axios, swr
\
**Backend:** Node.js, Express.js, MongoDB, mongoose, cors, nodemailer, multer, jcrypt
\
**Web scraping:** Python, Jupyter Notebook, flask, beautifulsoup, pymongo, mongoDB, sqllite3
\
**Deployments:** Frontend: Netlify, Backend: Render, Web scapper: Google Collab, Replit






## Feedback

If you have any feedback, please reach out to us at mayurshrikantjadhav@gmail.com


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Authors

- [@mayurjadhav2002](https://www.github.com/mayurjadhav2002)


