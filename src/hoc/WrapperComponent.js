
const WrapperComponent = (WrappedComponent)=>{
    // return function WrapperRender(args){
    //     return WrappedComponent(args);
    // }
    return (args)=>(WrappedComponent(args));
}

export default WrapperComponent;