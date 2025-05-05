import noProjectImage from '../assets/no-projects.png'
import Button from './Button';

function NoProjectSelected({onStartAddProject}) {
    return (
        <div className='w-full p-16 flex flex-col items-center gap-5'>
            <img className='w-16 h-16 object-contain' src={noProjectImage} alt="no project image" />
            <h2 className='text-xl font-bold text-stone-500'>No Project Selected</h2>
            <p className='text-stone-400 mb-5'>Select a project or get started with a new one</p>
            <Button onClick={onStartAddProject}>Create new project</Button>
        </div>
    );
}

export default NoProjectSelected;