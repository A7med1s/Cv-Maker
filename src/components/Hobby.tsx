// import  { useState, useEffect, FC } from 'react';
// import CreatableSelect from 'react-select/creatable';

// // تعريف واجهة للخيارات
// interface Option {
//   value: string;
//   label: string;
// }

// const Hobby: FC = () => {
//   // حالة لتخزين قيم الخيارات المحددة كمصفوفة من السلاسل
//   const [selectedValues, setSelectedValues] = useState<string[]>([]);

//   // تابع للتعامل مع التغييرات في CreatableSelect مع تحديد النوع
//   const handleChange = (options: Option[] | null) => {
//     // تحديث الحالة بقيم الخيارات المحددة فقط
//     setSelectedValues(options ? options.map(option => option.value) : []);
//   };

//   // استخدام useEffect لمراقبة التغييرات في selectedValues
//   useEffect(() => {
//     // تحويل القيم إلى string وتخزينها في localStorage
//     const selectedValuesAsString = JSON.stringify(selectedValues);
//     localStorage.setItem('user-hobbies', selectedValuesAsString);
//   }, [selectedValues]);

//   return (
//     <>
//       <div id='hobby'>
//         <p className="text-extrabold text-2xl text-center mt-4">Hobbies</p>
//         <p className='mb-6'>*Optional</p>
//         <div className="flex justify-around">
//           <div className="md:col-span-5">
//             <CreatableSelect
//               isMulti
//               className='creatableReactSelect'
//               onChange={handleChange} // إضافة التابع للتعامل مع التغييرات
//               value={selectedValues.map(value => ({ value, label: value }))} // تعيين القيم المحددة
//               getOptionLabel={(option) => option.label}
//               getOptionValue={(option) => option.value}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hobby;