import React from 'react';

const ContributorPage = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">Be a Contributor</h1>
        <p className="text-lg text-center mb-6">
          If you want to contribute to the Learnsource community by sharing your knowledge, any free certification information, giveaways, or want to contribute to the code, please contact us.
        </p>
        <div className="text-center">
          <a
            href="mailto:mayurshrikantjadhav@gmail.com"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributorPage;
