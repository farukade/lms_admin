(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[317],{61948:function(e,r,t){Promise.resolve().then(t.bind(t,40504))},40504:function(e,r,t){"use strict";t.r(r);var o=t(57437);t(2265);var n=t(98350),a=t(84762),i=t(87263),u=t(26067);r.default=e=>(0,o.jsxs)("div",{children:[(0,o.jsx)(a.Z,{title:"Elearning - Admin",description:"ELearning is a platform for students to learn and get help from teachers",keywords:"Prograaming,MERN,Redux,Machine Learning"}),(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("div",{className:"1500px:w-[16%] w-1/5",children:(0,o.jsx)(n.Z,{})}),(0,o.jsxs)("div",{className:"w-[85%]",children:[(0,o.jsx)(i.Z,{}),(0,o.jsx)(u.Z,{})]})]})]})},26067:function(e,r,t){"use strict";t.d(r,{Z:function(){return E}});var o=t(57437),n=t(2265),a=t(86982),i=t(40418),u=t(96507),d=t(6435),s=t(22626),l=t(87585),c=t(40887),m=t(10273);let f=m.gk.injectEndpoints({endpoints:e=>({getAllOrders:e.query({query:e=>({url:"get-orders",method:"GET"})}),getStripePublishablekey:e.query({query:()=>({url:"payment/stripepublishablekey",method:"GET"})}),createPaymentIntent:e.mutation({query:e=>({url:"payment",method:"POST",body:{amount:e}})}),createOrder:e.mutation({query:e=>{let{courseId:r,payment_info:t}=e;return{url:"create-order",body:{courseId:r,payment_info:t},method:"POST"}}})}),overrideExisting:!0}),{useGetAllOrdersQuery:p,useGetStripePublishablekeyQuery:h,useCreatePaymentIntentMutation:y,useCreateOrderMutation:x}=f;var b=t(11038),v=t(99150),E=e=>{let{isDashboard:r}=e,{theme:t,setTheme:m}=(0,d.F)(),{isLoading:f,data:h}=p({}),{data:y}=(0,b.wv)({}),{data:x}=(0,s.zk)({}),[E,g]=(0,n.useState)([]);(0,n.useEffect)(()=>{if(h){let e=h.orders.map(e=>{let r=null==y?void 0:y.users.find(r=>r._id===e.userId),t=null==x?void 0:x.courses.find(r=>r._id===e.courseId);return{...e,userName:null==r?void 0:r.name,userEmail:null==r?void 0:r.email,title:null==t?void 0:t.name,price:"$"+(null==t?void 0:t.price)}});g(e)}},[h,y,x]);let k=[{field:"id",headerName:"ID",flex:.3},{field:"userName",headerName:"Name",flex:r?.6:.5},...r?[]:[{field:"userEmail",headerName:"Email",flex:1},{field:"title",headerName:"Course Title",flex:1}],{field:"price",headerName:"Price",flex:.5},...r?[{field:"created_at",headerName:"Created At",flex:.5}]:[{field:" ",headerName:"Email",flex:.2,renderCell:e=>(0,o.jsx)("a",{href:"mailto:".concat(e.row.userEmail),children:(0,o.jsx)(v.Dme,{className:"dark:text-white text-black",size:20})})}]],T=[];return E&&E.forEach(e=>{T.push({id:e._id,userName:e.userName,userEmail:e.userEmail,title:e.title,price:e.price,created_at:(0,c.WU)(e.createdAt)})}),(0,o.jsx)("div",{className:r?"mt-[0px]":"mt-[120px]",children:f?(0,o.jsx)(l.Z,{}):(0,o.jsx)(u.Z,{m:r?"0":"40px",children:(0,o.jsx)(u.Z,{m:r?"0":"40px 0 0 0",height:r?"35vh":"90vh",overflow:"hidden",sx:{"& .MuiDataGrid-root":{border:"none",outline:"none"},"& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":{color:"dark"===t?"#fff":"#000"},"& .MuiDataGrid-sortIcon":{color:"dark"===t?"#fff":"#000"},"& .MuiDataGrid-row":{color:"dark"===t?"#fff":"#000",borderBottom:"dark"===t?"1px solid #ffffff30!important":"1px solid #ccc!important"},"& .MuiTablePagination-root":{color:"dark"===t?"#fff":"#000"},"& .MuiDataGrid-cell":{borderBottom:"none!important"},"& .name-column--cell":{color:"dark"===t?"#fff":"#000"},"& .MuiDataGrid-columnHeaders":{backgroundColor:"dark"===t?"#3e4396":"#A4A9FC",borderBottom:"none",color:"dark"===t?"#fff":"#000"},"& .MuiDataGrid-virtualScroller":{backgroundColor:"dark"===t?"#1F2A40":"#F2F0F0"},"& .MuiDataGrid-footerContainer":{color:"dark"===t?"#fff":"#000",borderTop:"none",backgroundColor:"dark"===t?"#3e4396":"#A4A9FC"},"& .MuiCheckbox-root":{color:"dark"===t?"#b7ebde !important":"#000 !important"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:"#fff !important"}},children:(0,o.jsx)(a._$,{checkboxSelection:!r,rows:T,columns:k,components:r?{}:{Toolbar:i.n}})})})})}},87585:function(e,r,t){"use strict";var o=t(57437);t(2265),t(1622),r.Z=()=>(0,o.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,o.jsx)("div",{className:"loader"})})},22626:function(e,r,t){"use strict";t.d(r,{_c:function(){return a},a_:function(){return u},h4:function(){return d},zk:function(){return i}});var o=t(10273);let n=o.gk.injectEndpoints({endpoints:e=>({createCourse:e.mutation({query:e=>({url:"create-course",method:"POST",body:e})}),getAllCourses:e.query({query:()=>({url:"get-admin-courses",method:"GET"})}),deleteCourse:e.mutation({query:e=>({url:"delete-course/".concat(e),method:"DELETE"})}),editCourse:e.mutation({query:e=>{let{id:r,data:t}=e;return{url:"edit-course/".concat(r),method:"PUT",body:t}}}),getUsersAllCourses:e.query({query:()=>({url:"get-courses",method:"GET"})}),getCourseDetails:e.query({query:e=>({url:"get-course/".concat(e),method:"GET"})}),getCourseContent:e.query({query:e=>({url:"get-course-content/".concat(e),method:"GET"})}),addNewQuestion:e.mutation({query:e=>{let{question:r,courseId:t,contentId:o}=e;return{url:"add-question",body:{question:r,courseId:t,contentId:o},method:"PUT"}}}),addAnswerInQuestion:e.mutation({query:e=>{let{answer:r,courseId:t,contentId:o,questionId:n}=e;return{url:"add-answer",body:{answer:r,courseId:t,contentId:o,questionId:n},method:"PUT"}}}),addReviewInCourse:e.mutation({query:e=>{let{review:r,rating:t,courseId:o}=e;return{url:"add-review/".concat(o),body:{review:r,rating:t},method:"PUT"}}}),addReplyInReview:e.mutation({query:e=>{let{comment:r,courseId:t,reviewId:o}=e;return{url:"add-reply",body:{comment:r,courseId:t,reviewId:o},method:"PUT"}}})}),overrideExisting:!0}),{useCreateCourseMutation:a,useGetAllCoursesQuery:i,useDeleteCourseMutation:u,useEditCourseMutation:d,useGetUsersAllCoursesQuery:s,useGetCourseDetailsQuery:l,useGetCourseContentQuery:c,useAddNewQuestionMutation:m,useAddAnswerInQuestionMutation:f,useAddReviewInCourseMutation:p,useAddReplyInReviewMutation:h}=n},11038:function(e,r,t){"use strict";t.d(r,{I1:function(){return l},V1:function(){return s},wv:function(){return d}});var o=t(10273);let n=o.gk.injectEndpoints({endpoints:e=>({updateAvatar:e.mutation({query:e=>({url:"update-user-avatar",method:"PUT",body:{avatar:e}})}),editProfile:e.mutation({query:e=>{let{name:r}=e;return{url:"update-user-info",method:"PUT",body:{name:r}}}}),updatePassword:e.mutation({query:e=>{let{oldPassword:r,newPassword:t}=e;return{url:"update-user-password",method:"PUT",body:{oldPassword:r,newPassword:t}}}}),getAllUsers:e.query({query:()=>({url:"get-users",method:"GET"})}),updateUserRole:e.mutation({query:e=>{let{email:r,role:t}=e;return{url:"update-user",method:"PUT",body:{email:r,role:t}}}}),deleteUser:e.mutation({query:e=>({url:"delete-user/".concat(e),method:"DELETE"})})}),overrideExisting:!0}),{useUpdateAvatarMutation:a,useEditProfileMutation:i,useUpdatePasswordMutation:u,useGetAllUsersQuery:d,useUpdateUserRoleMutation:s,useDeleteUserMutation:l}=n},1622:function(){},33018:function(e,r,t){"use strict";var o=t(61289);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,r,t,n,a,i){if(i!==o){var u=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:a,resetWarningCache:n};return t.PropTypes=t,t}},74275:function(e,r,t){e.exports=t(33018)()},61289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[115,400,805,712,215,702,724,587,61,971,596,744],function(){return e(e.s=61948)}),_N_E=e.O()}]);