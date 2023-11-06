import {all_the_selected_services} from './Constants'

export function get_all_the_selected_services(selected_services){
    return{
        type:all_the_selected_services,
        data:selected_services
    }

}