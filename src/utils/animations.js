export const AnimationLoader = (timeline,rotationRef,
    rotationState,first,second,props)=>{
        timeline.to(rotationRef.current.rotation,{
            y:rotationState,
            duration:1,
            ease: 'power2.inOut'
        })
timeline.to(
    first,{
        ...props,
        ease: 'power2.inOut'
    },
    '<'
)
timeline.to(
    second,{
        ...props,
        ease: 'power2.inOut'
    },
    '<'
)

}