import './delete-confirm.css'

export default function DeleteConfirm () {
    return( 
        <div>
            <div className='confirm-body'>
                <div>Вы уверены, что хотите удалить данный контакт?</div>
            <button className='button-yes'>Да</button>
            <button className='button-no'>Нет</button>
            </div>
        </div>
    )
}