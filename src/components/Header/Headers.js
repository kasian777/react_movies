import {Link} from "react-router-dom";
import UserImage from "../UserImage/UserImage";
import UserInfo from "../UserInfo/UserInfo";
import {useState} from "react";
import {useSelector} from "react-redux";

import './header.css';

export default function Headers() {

    const [findMovie, setFindMovie] = useState({});
    const [formState, setFormState] = useState({title: ''})

    const {movies} = useSelector(({reducer}) => reducer);

    /*MovieByName*/

    const onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
        movies.map(value => {
            if (String(value.title) === String(formState.title)) {
                setFindMovie(value.id)
            }
        })
    }

    const save = (e) => {
        e.preventDefault();
        console.log(findMovie)
        setFormState({title: ''});
    }

    const changeColor = () => {
        document.body.classList.toggle('dark');
    }


    return (
        <div className="Headers">
            <div className={'Wrapper'}>
                <Link to={'/movies'}><img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                    alt="Logo" className={'img_header'}/></Link>

                <Link to={'/movies'} className={'movie_b'}>Movies</Link>

                <button className={'ChangeTheme'} onClick={changeColor}>Change theme</button>

                <UserImage/>
                <UserInfo/>
            </div>
        </div>

    );
}
