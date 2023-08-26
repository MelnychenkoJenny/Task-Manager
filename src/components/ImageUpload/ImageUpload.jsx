import React, { useState } from 'react';
import axios from 'axios';

// Завантаження зображення з файлової системи комп'ютера, його відправка в хмару Cloudinary та отримання url (для бекенду)

export const ImageUpload = () => {       
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = async () => {
        const formData = new FormData(); // створює FormData об'єкт (може зберігати різні типи даних) - потрібен для відправки даних на віддалені сервери
        formData.append('file', selectedImage); // вносимо в створений об'єкт ключ зі значенням (зображенням)
        //selectedImage = File {name: 'Start.png', lastModified: 1692835872168, lastModifiedDate: Thu Aug 24 2023 03:11:12 GMT+0300 (за східноєвропейським літнім часом), webkitRelativePath: '', size: 95201, type: "image/png", webkitRelativePath: ""}
        formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);  // додаємо в об'єкт налаштування з Unsigned mode (можливе завантаження без підписки)
        // console.log(formData); // повертає FormData {} - насправді об'єкт не пустий. Пересвідчимось:
        // for (const entry of formData.entries()) {
        //     console.log("entry:", entry); // (2) ['file', File]    
        // }                                    (2) ['upload_preset', 's38mj4ga']

        return await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/upload`, formData) // прверне url
            .then((response) => {const data = response.data['secure_url']; console.log(data)})
            .catch(error => {console.log(error)});
        // response.data - це великий об'єкт. Посилання зберігається у властивості 'secure_url'
        // https://res.cloudinary.com/dp9pimwin/image/upload/v1692999523/bazqndveqkkwhfthxaxg.png
        // саме зображення зберігається у хмарі cloudinary (на сайті в Media Library)
    };   

    return (
        <div>
            <p>----------------------------------------------</p>
            <p>Тут можна протестувати роботу хмари Cloudinary</p>
            <p>Завантажте зображення з файлової системи комп'ютера та відправте його в хмару. Отримаєте url для бекенду (див. в консолі браузера)</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedImage(e.target.files[0])} // e.target - file input element; e.target.files - contains an array-like object representing the selected files.
            // [0] - the first selected file. If the user is allowed to select multiple files (using the multiple attribute on the file input), you could iterate through the files array to access all selected files.
          />
          <button onClick={handleImageUpload}>Upload Image to Cloudinary</button>
        </div>
    );
}