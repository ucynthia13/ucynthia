type BoundedProps = {
    as?: React.ElementType,
    className: string,
    children?: React.ReactNode
}

export default function Section({
    as: Comp = "section",
    className,
    children,
    ...restProps

}: BoundedProps){
    return(
        <Comp>
            <div className="mx-auto flex w-full max-w-3xl flex-col">
                {children}
            </div>
        </Comp>
    )
}