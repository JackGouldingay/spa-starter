import Component from "../components/component";

interface HomePageProps { 
    num: number;
}

export default function HomePage(props: HomePageProps) {

    return (
        <div className={`tool tool-${props.num}`}>
            <Component message="Home page" />
        </div>
    );
}