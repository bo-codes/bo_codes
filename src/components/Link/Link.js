// import  useNavigation from "../../hooks/use-navigation";


// function Link({to, children}) {
//   // NON-STREAMLINED CODE
//   // const {navigate} = useContext(NavigationContext);

//   // STREAMLINED CODE
//   const {navigate} = useNavigation();

//   const handleClick = (event) => {
//     // if user is holding down cmd/ctr key, they return out of
//     // this handleClick function so that the <a/> tag can do
//     // its default behavior.
//     if (event.metaKey || event.ctrlKey ) return;

//     event.preventDefault();

//     navigate(to);
//   };
//   return (
//     <a href={to} onClick={handleClick} style={{textDecoration: 'none', color: 'white'}}>{children}</a>
//   )
// }

// export default Link;
