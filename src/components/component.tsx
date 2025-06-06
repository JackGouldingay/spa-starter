import "./component.css"

interface ComponentProps { 
    message: string;
}

export default function Component(props: ComponentProps) {
    return (
        <div className="custom">
            { props.message }
        </div>
    );
}