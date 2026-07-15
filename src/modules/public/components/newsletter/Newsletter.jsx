// import NewsletterForm from "./NewsletterForm";

// const Newsletter = () => {
//   return (
//     <section className="bg-blue-600 py-20 ">
//       <div className="container mx-auto px-4 ">
//         <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl mt-20 ">
//           <div className="text-center ">
//             <span className="pt-6 pb-6 mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
//               Newsletter
//             </span>

//             <h2 className="text-4xl font-bold text-gray-900">
//               Subscribe to Our Newsletter
//             </h2>

//             <p className="mx-auto mt-4 max-w-2xl text-gray-600">
//               Stay updated with our latest products, exclusive offers,
//               discounts, and upcoming collections delivered directly
//               to your inbox.
//             </p>
//           </div>

//           <div className="mt-10">
//             <NewsletterForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section className="bg-blue-600 py-20 ">
      <div className="container mx-auto px-4 pt-6 pb-6 mt-4 mb-4">
        {/* Yaha pt-10 pb-10 add kiya */}
        <div className="mx-auto max-w-4xl rounded-3xl bg-white pt-10 pb-10 px-10 shadow-xl mt-4 mb-4">
          <div className="text-center mt-4 mb-4">
            <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
              Newsletter
            </span>

            <h2 className="text-4xl font-bold text-gray-900">
              Subscribe to Our Newsletter
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Stay updated with our latest products, exclusive offers,
              discounts, and upcoming collections delivered directly
              to your inbox.
            </p>
          </div>

          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
