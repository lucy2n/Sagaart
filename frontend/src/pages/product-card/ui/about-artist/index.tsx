import React from 'react';
import InfoPoint from '../../../../widgets/info-point';
import { Author } from '../../../../shared/entities/product-details';
import style from './style.module.css';

const AboutArtist = (props : {author: Author}) => {

    const gender = props.author.gender === 1 ? 'Мужской' : 'Женский';
    const date = new Date(props.author.birth_date);
    const age = date.getFullYear() +  ' ' + '(' + props.author.age + ')';

    return (
        <div className={style.main}>
            <div className={style.columns}>
                <div className={style.column}>
                    <InfoPoint title='Пол' desc={gender} />
                    <InfoPoint title='Год рождения' desc={age}/>
                    <InfoPoint title='Город рождения' desc={props.author.city_of_birth}/>
                </div>
                <div className={style.column}>
                    <InfoPoint title='Город проживания' desc={props.author.city_live}/>
                    <InfoPoint title='Образование' desc={props.author.education}/>
                    <InfoPoint title='Художественное образование' desc={props.author.professional_education}/>
                </div>
                <div className={style.column}>
                    <InfoPoint title='Опыт преподавания' desc={props.author.teaching_experience}/>
                    <InfoPoint title='Персональный стиль' desc={props.author.personal_style}/>
                    <InfoPoint title='Социальные сети' desc={''}/>
                </div>
            </div>
        </div>
    );
};

export default AboutArtist;