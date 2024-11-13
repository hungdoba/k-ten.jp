import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

export default function loading() {
  const blurDataUrls = [
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAfEAACAQIHAAAAAAAAAAAAAAABAgADBQQREhNBUYH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAMAAwEAAAAAAAAAAAAAAAECAwAREiH/2gAMAwEAAhEDEQA/AKsmNe306yMu8obSATl7z1EREW1E2qnzJ3klD0w2c//Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAEAAQQDAQAAAAAAAAAAAAABBAACAxEFEkFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABgRAAMBAQAAAAAAAAAAAAAAAAACEQFB/9oADAMBAAIRAxEAPwCQ4mZljxrpCWZAE63GkT3Yn2lKtyBdP//Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAZEAADAAMAAAAAAAAAAAAAAAAAERIBIaH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwCNPEKdt0+ALX//2Q==',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAEFAAAAAAAAAAAAAAACAAEDBBEFBhMVkf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAUH/2gAMAwEAAhEDEQA/AJ3vyg23rVcqkch2HMOYidyAcO2B9RESuC//2Q==',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAgEAABAgUFAAAAAAAAAAAAAAABAgMABAURIQYSFCKR/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABsRAAIBBQAAAAAAAAAAAAAAAAABAgMEETFB/9oADAMBAAIRAxEAPwCRvU1UamuaDLqdKVbSptWCSCCe2bG/sIJG5xpCJUW+n//Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAdEAAABQUAAAAAAAAAAAAAAAAAAQIEQQMGERIh/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABsRAAEEAwAAAAAAAAAAAAAAAAEAAgMRBBIx/9oADAMBAAIRAxEAPwCHN/vSwaG+s9rLOAC48wubeoQzHR6V/9k=',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAACAQIHAAAAAAAAAAAAAAABAgMABAUGESEicZH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABoRAAEFAQAAAAAAAAAAAAAAAAABAgMRITH/2gAMAwEAAhEDEQA/AL93mvHhOrx3scaqRwEClW7138IpV3R7gaWun//Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABAwQDAAAAAAAAAAAAAAABAAIDBBEhMQUGJP/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwCP3Oudy1ZHDNGz3gzF53G4Nti1gcAbRESktB//2Q==',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAABAwQDAAAAAAAAAAAAAAABABEUAxITUTJhkf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAABADH/2gAMAwEAAhEDEQA/AJBKqxY95xtxYbB10PAiADJVdv/Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAALAAgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAIRAAAgIBAgcAAAAAAAAAAAAAAQIAAwQREiExMkFxgbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAJBExT/2gAMAwEAAhEDEQA/ANEEvaK91aOeCat1Dvp6+GJJa7WZmKXYsdr8/ERut6BgsP/Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBAMBAAAAAAAAAAAAAAACAAEEEQMFIVH/xAAVAQEBAAAAAAAAAAAAAAAAAAAABP/EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8An9fvtnAgC8KUUbGDkTBj50iq79oWREVOKU56LS2f/9k=',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDBBEhBRIiMXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABgRAAMBAQAAAAAAAAAAAAAAAAABAjEh/9oADAMBAAIRAxEAPwCFbdZBwcdeCnXjMnlJKGkvd1wBvOvZ+52iIilPS1zD/9k=',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAALAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAACAgMBAQAAAAAAAAAAAAABAgMRABIhUZH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABkRAAIDAQAAAAAAAAAAAAAAAAEDAAIRBP/aAAwDAQACEQMRAD8AspIrz6h0ddxxekijXPbHzGRWkd5pnZjcZOlcq7xgr1MAlWIpoyf/2Q==',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQMFAAAAAAAAAAAAAAABAgADBBEFBiExUf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAaEQACAwEBAAAAAAAAAAAAAAABAgAxQRGR/9oADAMBAAIRAxEAPwCauNx6q7qyXlRMoeCFI68xERGv1aJ3TChENqPBP//Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAAABQUBAAAAAAAAAAAAAAAAAQIEEgMFERcxwf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAaEQACAgMAAAAAAAAAAAAAAAABEgAEESGh/9oADAMBAAIRAxEAPwCRtW7EmDVm1oJxyMi8AJFptr0wqKMAz//Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASEAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAACAQIHAAAAAAAAAAAAAAABAwIABAUHERIhgdH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAHBEAAgAHAAAAAAAAAAAAAAAAAAIBBBEhIlGh/9oADAMBAAIRAxEAPwCXcZpY2bfahaEa8GUQTI9nylMhMLfHoSjbP//Z',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EAB4QAAEEAQUAAAAAAAAAAAAAAAEAAgMEIQUGERPB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAbEQACAQUAAAAAAAAAAAAAAAAAAyEBAjFBcf/aAAwDAQACEQMRAD8AOglm3rY0R1g9EUAc08ZyAfURFZa7JjYZXHD/2Q==',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDEQYHE6H/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAwDAQACEQMRAD8AkRsvIubmOnjJqwREwV4iIrnGI2//2Q==',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDBBExQcH/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECEQP/2gAMAwEAAhEDEQA/AKl6vXjjiIgiw4lhaWNIydHXPUREZTeiz5zVvT//2Q==',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAgEAACAQEJAAAAAAAAAAAAAAABAwACBAUHERMjMVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAbEQABBAMAAAAAAAAAAAAAAAABAAIDUQQRMf/aAAwDAQACEQMRAD8AoXiRfCKkLoRZNxGqSaD2Rlz5ERIJcmUO7VIAGl//2Q==',
  ];
  return (
    <div className="absolute w-screen flex flex-col h-screen items-center">
      <div className="relative h-5/6 w-full flex items-center justify-center pt-2 md:pt-4">
        <div
          className={`mx-2 md:mx-0 relative rounded-lg overflow-hidden h-1/3 md:h-full max-w-7xl flex-1 transition-opacity duration-300`}
        >
          {/* Main image */}
          <Image src={blurDataUrls[0]} alt="Big image" fill sizes="100vw" />

          {/* Button Close: Top Left */}
          <div className="absolute top-0 left-0 p-2 bg-gray-700 bg-opacity-70 text-white rounded-full m-2">
            <div className="w-4 h-4 flex justify-center items-center">
              <FiX />
            </div>
          </div>

          {/* Button Back: Left Center */}
          <div className="absolute left-4 top-1/2 bg-opacity-70 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full">
            <div className="w-4 h-4 flex justify-center items-center">
              <FiChevronLeft />
            </div>
          </div>

          {/* Button Next: Right Center */}
          <div className="absolute right-4 top-1/2 bg-opacity-70 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full">
            <div className="w-4 h-4 flex justify-center items-center">
              <FiChevronRight />
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>

      {/* Scroll bar thumbnail images */}
      <div className="h-1/6 fixed bottom-0 text-white flex justify-center items-center w-full">
        <div className="w-full max-w-5xl flex overflow-x-scroll space-x-2 p-4 bg-white bg-opacity-30 backdrop-blur-lg scrollbar-hidden rounded-lg no-scrollbar">
          {blurDataUrls.map((url: string, id: number) => (
            <div
              key={id}
              className="w-24 h-24 relative flex-shrink-0 cursor-pointer"
            >
              <Image
                src={url}
                alt={`Thumbnail ${id}`}
                className={`rounded-lg transition-transform duration-300`}
                fill
                sizes="96px"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
