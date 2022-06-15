 export interface IGuardian {
    status: string,
    userTier: string,
    total: number,
    startIndex: number,
    pageSize: number,
    currentPage: number,
    pages: number,
    edition: IEdition,
    section: ISection,
    results: Array<IResult>,
}

interface IEdition {
    id: string,
    webTitle: string,
    webUrl: string,
    apiUrl: string,
    code: string
}

export interface IResult {
    id: string,
    type: string,
    sectionId: string,
    sectionName: string,
    webPublicationDate: string,
    webTitle: string,
    webUrl: string,
    apiUrl: string,
    isHosted: string,
    pillarId: string,
    pillarName: string
}

interface ISection {
    id: string,
    webTitle: string,
    webUrl: string,
    apiUrl: string,
    editions: any
}