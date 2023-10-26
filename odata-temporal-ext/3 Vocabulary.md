
-------

# ##sec Vocabulary for Temporal Data

The vocabulary for temporal data [OData-VocTemporal](#ODataVocTemporal)
defines a structured term for describing temporal query and modification
capabilities of temporal services.

The term `ApplicationTimeSupport` describes the temporal capabilities of
an entity set. It can be applied to an entity set, or to a containment
navigation property to describe its implicit entity sets. It has a
structured type with the following properties:

- `UnitOfTime` describes the data type of
  the application-time period start and end values. Its value is a record
  of either type `UnitOfTimeDate` or `UnitOfTimeDateTimeOffset`.
  - Records of type `UnitOfTimeDateTimeOffset` MUST specify the property `Precision`.
  - Records of type `UnitOfTimeDate` MAY specify the property `ClosedClosedPeriods`.
- `Timeline` describes the kind of
  temporal entity set. Its value is a record of either type
  `TimelineSnapshot` or `TimelineVisible`.
  - Records of type `TimelineSnapshot` MUST NOT specify any properties.
  - Records of type `TimelineVisible` MUST specify the properties `PeriodStart` and `PeriodEnd`.
    - These properties MUST point to
      properties of the annotated entity set whose values are the period start
      and end of a time slice.
    - The start is always included in the
      time slice, the end is included if and only if the sibling property
      `UnitOfTime` is of type `UnitOfTimeDate` and specifies property
      `ClosedClosedPeriods` as `true`.
    - If the period end property does not
      specify a default value, a default value of "ad infinitum" is assumed.
  - Records of type `TimelineVisible` MAY specify the property `ObjectKey`.
    - `ObjectKey` is the “sub-key” or “alternate key” that identifies time slices for a single temporal object.
      It is only necessary if the annotated entity set can contain time slices
      for more than one temporal object. `The object key is `a collection of
      property paths whose value combination uniquely identifies a temporal
      object.
- `SupportedActions` is a collection of
  qualified names of temporal actions that may be bound to the annotated
  entity set. These can be the [standard actions defined in this specification](#ModifyingTemporalData),
  or service-specific actions.

::: example
Example ##ex: `Employees` entity set from [example model `api-1`](#api1)
annotated with temporal terms
```json
"Employees": {
  "$Collection": true,
  "$Type": "OrgModel.Employee",
  "@Temporal.ApplicationTimeSupport": {
    "Timeline": {
      "@odata.type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.json#Temporal.TimelineSnapshot"
    },
    "UnitOfTime": {
      "@odata.type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.json#Temporal.UnitOfTimeDate"
    }
  }
},
```
:::

::: example
Example ##ex: `history` navigation property in entity set `Employees` from
[example model `api-2`](#api2) annotated with temporal terms
```json
"$Annotations": {
  "OrgModel.Default/Employees/history": {
    "@Temporal.ApplicationTimeSupport": {
      "Timeline": {
        "@odata.type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.json#Temporal.TimelineVisible",
        "TimeSliceStart": "From",
        "TimeSliceEnd": "To",
        "SupportedActions": [
          "Temporal.Update",
          "Temporal.Upsert",
          "Temporal.Delete"
        ]
      },
      "UnitOfTime": {
        "@odata.type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.json#Temporal.UnitOfTimeDate"
      }
    }
  }
}
```
:::

::: example
Example ##ex_CostCenters: `CostCenters` entity set containing time slices for multiple
temporal objects, the temporal objects identified by combination of
`AreaID` and `CostCenterID`
```json
"CostCenter": {
  "$Kind": "EntityType",
  "$Key": ["tsid"],
  "tsid": {},
  "AreaID": {},
  "CostCenterID": {},
  "ValidTo": { "$Type": "Edm.Date" },
  "ValidFrom": { "$Type": "Edm.Date" },
  "ProfitCenterID": { "$Nullable": true },
  "DepartmentID": { "$Nullable": true }
},

"Default": {
  "$Kind": "EntityContainer",
  "CostCenters": { "$Collection": true, "$Type": "this.CostCenter" }
},

"$Annotations": {
  "this.Default/CostCenters": {
    "@Temporal.ApplicationTimeSupport": {
      "UnitOfTime": {
        "@odata.type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.xml#Temporal.UnitOfTimeDate",
        "ClosedClosedPeriods": true
      },
      "Timeline": {
        "@odata.type": "https://oasis-tcs.github.io/odata-vocabularies/vocabularies/Org.OData.Temporal.V1.xml#Temporal.TimelineVisible",
        "PeriodStart": "ValidFrom",
        "PeriodEnd": "ValidTo",
        "ObjectKey": ["AreaID", "CostCenterID"]
      },
      "SupportedActions": [
        "Temporal.Update",
        "Temporal.Upsert",
        "Temporal.Delete"
      ]
    }
  }
}
```
:::
