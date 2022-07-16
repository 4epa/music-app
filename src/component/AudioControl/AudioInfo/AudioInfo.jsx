import style from '../AudioContol.module.css';

const AudioInfo = (props) => {
  return (
    <div className={style.info_box} >
      <div className={style.cover} >
        <img src={props.cover} alt="#" />
      </div>
      <div className={style.description} >
        <div className={style.audio_title}>{props.title}</div>
        <div className={style.audio_author}>{props.author}</div>
      </div>
    </div>
  )
}

export default AudioInfo;