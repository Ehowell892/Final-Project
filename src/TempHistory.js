import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./Current Weather.css";
function TempHistory() {
        const [tempData, setTempData] = useState(null);
        const currentDate = new Date();
        const apiURL = 'http://localhost:3001/temps';
        useEffect(() => {
                const getTempData = async () => {
                        try {
                                const response = await fetch(apiURL);
                                setTempData(await response.json());
                                console.log(tempData);
                        }
                        catch (error) {
                                console.log("ERROR: " + error);
                        }
                        finally {
                        }
                };
                getTempData();
        }, [apiURL]);
        const handleUpdate = (id, updatedZipcode, updatedTemp) => {
                fetch(`http://localhost:3001/temps/${id}`, {
                        method: 'PUT',
                        headers: {
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ zipcode: updatedZipcode, temp: updatedTemp }),
                })
                        .then(response => {
                                if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                }
                                setTempData(tempData.map(item => item.id === id ? { ...item, zipcode: updatedZipcode, temp: updatedTemp } : item));
                        })
                        .catch(error => console.error('Error updating item:', error));
        };

        // Delete an item
        const handleDelete = (id) => {
                fetch(`http://localhost:3001/temps/${id}`, {
                        method: 'DELETE',
                })
                        .then(response => {
                                if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                }
                                setTempData(tempData.filter(item => item.id !== id));
                        })
                        .catch(error => console.error('Error deleting item:', error));
        };
        if (!tempData) return <p>Loading temp data,</p>;
        return (
                <div>
                        <div className="grid grid-cols-1 gap-x10 w-800">
                                <div>
                                        History of temperatures by zipcode
                                </div>
                                {tempData.map(currenttemp => (
                                        <div>
                                                <input type="text" value={currenttemp.zipcode} onChange={(e) => handleUpdate(currenttemp.id, e.target.value, currenttemp.temp)} placeholder="Zipcode" />
                                                <input
                                                        type="text"
                                                        value={currenttemp.temp}
                                                        onChange={(e) => handleUpdate(currenttemp.id, currenttemp.zipcode, e.target.value)}
                                                        placeholder="Temperature"
                                                />
                                                <button onClick={() => handleDelete(currenttemp.id)}>Delete</button>
                                        </div>
                                ))
                                }
                        </div>
                </div>
        );
}

export default TempHistory;
