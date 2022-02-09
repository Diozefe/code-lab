import { format, Locale, } from "date-fns";
import localeBr from "date-fns/locale/pt-BR"

export function getDateNow(){
    
    const date = format( new Date(), 'yyyy-MM-dd HH:mm:ss', {
        locale:localeBr
    });

    return new Date(date);
}