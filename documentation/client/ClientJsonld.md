## Interface

export interface ClientJsonld {
    '@context'?: ArrivalJsonldArrivalCollectionGetArrivalCollectionPostStatusesCollectionGetStatusesCollectionPostBagCollectionGetBagCollectionPostContext;
    readonly '@id'?: string;
    readonly '@type'?: string;
    readonly id?: number;
    name: string;
    lastName: string;
    cin: string;
    address: string;
    createdAt?: string | null;
    updatedAt?: string | null;
    cin_provenance?: Array<ICinProvenance>;
}
