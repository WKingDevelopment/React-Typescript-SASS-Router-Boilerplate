export class RouteInfo {
    constructor (public label:string|undefined, public path:string|undefined, public restricted:boolean, public component: () => JSX.Element) { }
}