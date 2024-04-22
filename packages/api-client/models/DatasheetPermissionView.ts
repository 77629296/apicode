/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FieldPermissionInfo } from '../models/FieldPermissionInfo';
import { HttpFile } from '../http/http';

/**
* Datasheet permission view
*/
export class DatasheetPermissionView {
    /**
    * Node ID
    */
    'nodeId'?: string;
    /**
    * DatasheetID（Node ID / Source Datasheet Node ID / null）
    */
    'datasheetId'?: string;
    /**
    * Whether the node is a star
    */
    'nodeFavorite'?: boolean;
    /**
    * Whether you have permission
    */
    'hasRole'?: boolean;
    /**
    * Role
    */
    'role'?: string;
    /**
    * Is it a ghost node
    */
    'isGhostNode'?: boolean;
    /**
    * Current user database ID
    */
    'userId'?: number;
    /**
    * Unique ID of the current user
    */
    'uuid'?: string;
    /**
    * Manageable
    */
    'manageable'?: boolean;
    /**
    * Editable
    */
    'editable'?: boolean;
    /**
    * Viewable
    */
    'readable'?: boolean;
    /**
    * Can create child nodes
    */
    'childCreatable'?: boolean;
    /**
    * Renamable
    */
    'renamable'?: boolean;
    /**
    * Editable icon
    */
    'iconEditable'?: boolean;
    /**
    * Editable node description
    */
    'descriptionEditable'?: boolean;
    /**
    * Movable node
    */
    'movable'?: boolean;
    /**
    * Replicable node
    */
    'copyable'?: boolean;
    /**
    * Importable
    */
    'importable'?: boolean;
    /**
    * Exportable
    */
    'exportable'?: boolean;
    /**
    * Deletable nodes
    */
    'removable'?: boolean;
    /**
    * Allow share nodes
    */
    'sharable'?: boolean;
    /**
    * The node can be set to allow others to save
    */
    'allowSaveConfigurable'?: boolean;
    /**
    * The node can be set to allow others to edit
    */
    'allowEditConfigurable'?: boolean;
    /**
    * Can be created as a template
    */
    'templateCreatable'?: boolean;
    /**
    * New View
    */
    'viewCreatable'?: boolean;
    /**
    * Rename View
    */
    'viewRenamable'?: boolean;
    /**
    * Delete View
    */
    'viewRemovable'?: boolean;
    /**
    * Move View
    */
    'viewMovable'?: boolean;
    /**
    * Export View
    */
    'viewExportable'?: boolean;
    /**
    * Filter Columns
    */
    'viewFilterable'?: boolean;
    /**
    * Sort Columns
    */
    'columnSortable'?: boolean;
    /**
    * Hide Columns
    */
    'columnHideable'?: boolean;
    /**
    * Edit Column Order
    */
    'fieldSortable'?: boolean;
    /**
    * Groupe
    */
    'fieldGroupable'?: boolean;
    /**
    * Edit Row Height
    */
    'rowHighEditable'?: boolean;
    /**
    * Edit Column Width
    */
    'columnWidthEditable'?: boolean;
    /**
    * Edit Column Statistics
    */
    'columnCountEditable'?: boolean;
    /**
    * Row sorting
    */
    'rowSortable'?: boolean;
    /**
    * New Field
    */
    'fieldCreatable'?: boolean;
    /**
    * Rename Field
    */
    'fieldRenamable'?: boolean;
    /**
    * Edit Field Properties
    */
    'fieldPropertyEditable'?: boolean;
    /**
    * Delete Field
    */
    'fieldRemovable'?: boolean;
    /**
    * New Row
    */
    'rowCreatable'?: boolean;
    /**
    * Delete Row
    */
    'rowRemovable'?: boolean;
    /**
    * Archive Row
    */
    'rowArchivable'?: boolean;
    /**
    * Unarchive Row
    */
    'rowUnarchivable'?: boolean;
    /**
    * Edit Cell
    */
    'cellEditable'?: boolean;
    /**
    * Whether column permissions can be managed
    */
    'fieldPermissionManageable'?: boolean;
    /**
    * Edit View Layout
    */
    'viewLayoutEditable'?: boolean;
    /**
    * Edit View Style
    */
    'viewStyleEditable'?: boolean;
    /**
    * Edit View Key Fields
    */
    'viewKeyFieldEditable'?: boolean;
    /**
    * Edit View Color Options
    */
    'viewColorOptionEditable'?: boolean;
    /**
    * View lock can be managed
    */
    'viewLockManageable'?: boolean;
    /**
    * View can be saved manually for management
    */
    'viewManualSaveManageable'?: boolean;
    /**
    * View Options Save Editable
    */
    'viewOptionSaveEditable'?: boolean;
    /**
    * Datasheet field permission information
    */
    'fieldPermissionMap'?: { [key: string]: FieldPermissionInfo; };
    /**
    * sharer is deleted
    */
    'isDeleted'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nodeId",
            "baseName": "nodeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "datasheetId",
            "baseName": "datasheetId",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodeFavorite",
            "baseName": "nodeFavorite",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasRole",
            "baseName": "hasRole",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string",
            "format": ""
        },
        {
            "name": "isGhostNode",
            "baseName": "isGhostNode",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "manageable",
            "baseName": "manageable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "editable",
            "baseName": "editable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "readable",
            "baseName": "readable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "childCreatable",
            "baseName": "childCreatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "renamable",
            "baseName": "renamable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "iconEditable",
            "baseName": "iconEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "descriptionEditable",
            "baseName": "descriptionEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "movable",
            "baseName": "movable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "copyable",
            "baseName": "copyable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "importable",
            "baseName": "importable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "exportable",
            "baseName": "exportable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "removable",
            "baseName": "removable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sharable",
            "baseName": "sharable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowSaveConfigurable",
            "baseName": "allowSaveConfigurable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowEditConfigurable",
            "baseName": "allowEditConfigurable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "templateCreatable",
            "baseName": "templateCreatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewCreatable",
            "baseName": "viewCreatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewRenamable",
            "baseName": "viewRenamable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewRemovable",
            "baseName": "viewRemovable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewMovable",
            "baseName": "viewMovable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewExportable",
            "baseName": "viewExportable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewFilterable",
            "baseName": "viewFilterable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "columnSortable",
            "baseName": "columnSortable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "columnHideable",
            "baseName": "columnHideable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fieldSortable",
            "baseName": "fieldSortable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fieldGroupable",
            "baseName": "fieldGroupable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rowHighEditable",
            "baseName": "rowHighEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "columnWidthEditable",
            "baseName": "columnWidthEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "columnCountEditable",
            "baseName": "columnCountEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rowSortable",
            "baseName": "rowSortable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fieldCreatable",
            "baseName": "fieldCreatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fieldRenamable",
            "baseName": "fieldRenamable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fieldPropertyEditable",
            "baseName": "fieldPropertyEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fieldRemovable",
            "baseName": "fieldRemovable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rowCreatable",
            "baseName": "rowCreatable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rowRemovable",
            "baseName": "rowRemovable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rowArchivable",
            "baseName": "rowArchivable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rowUnarchivable",
            "baseName": "rowUnarchivable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cellEditable",
            "baseName": "cellEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fieldPermissionManageable",
            "baseName": "fieldPermissionManageable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewLayoutEditable",
            "baseName": "viewLayoutEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewStyleEditable",
            "baseName": "viewStyleEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewKeyFieldEditable",
            "baseName": "viewKeyFieldEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewColorOptionEditable",
            "baseName": "viewColorOptionEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewLockManageable",
            "baseName": "viewLockManageable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewManualSaveManageable",
            "baseName": "viewManualSaveManageable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "viewOptionSaveEditable",
            "baseName": "viewOptionSaveEditable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fieldPermissionMap",
            "baseName": "fieldPermissionMap",
            "type": "{ [key: string]: FieldPermissionInfo; }",
            "format": ""
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DatasheetPermissionView.attributeTypeMap;
    }

    public constructor() {
    }
}

