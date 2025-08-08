
import './NavElements.css'

export function NavElements({children,initialClassName}){
    return (
        <div className={initialClassName}>
            {children}
        </div>
    );
}