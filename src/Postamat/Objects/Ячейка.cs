﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Ячейка.
    /// </summary>
    // *** Start programmer edit section *** (Ячейка CustomAttributes)

    // *** End programmer edit section *** (Ячейка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЯчейкаE", new string[] {
            "НомерЯчейки as \'Номер ячейки\'",
            "Транзакция as \'Транзакция\'",
            "Транзакция.Время as \'Время\'"}, Hidden=new string[] {
            "Транзакция.Время"})]
    [MasterViewDefineAttribute("ЯчейкаE", "Транзакция", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Время")]
    public class Ячейка : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерЯчейки;
        
        private IIS.Postamat.Транзакция fТранзакция;
        
        private IIS.Postamat.Постамат fПостамат;
        
        // *** Start programmer edit section *** (Ячейка CustomMembers)

        // *** End programmer edit section *** (Ячейка CustomMembers)

        
        /// <summary>
        /// НомерЯчейки.
        /// </summary>
        // *** Start programmer edit section *** (Ячейка.НомерЯчейки CustomAttributes)

        // *** End programmer edit section *** (Ячейка.НомерЯчейки CustomAttributes)
        public virtual int НомерЯчейки
        {
            get
            {
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Get start)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Get start)
                int result = this.fНомерЯчейки;
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Get end)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Set start)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Set start)
                this.fНомерЯчейки = value;
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Set end)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Set end)
            }
        }
        
        /// <summary>
        /// Ячейка.
        /// </summary>
        // *** Start programmer edit section *** (Ячейка.Транзакция CustomAttributes)

        // *** End programmer edit section *** (Ячейка.Транзакция CustomAttributes)
        [PropertyStorage(new string[] {
                "Транзакция"})]
        [NotNull()]
        public virtual IIS.Postamat.Транзакция Транзакция
        {
            get
            {
                // *** Start programmer edit section *** (Ячейка.Транзакция Get start)

                // *** End programmer edit section *** (Ячейка.Транзакция Get start)
                IIS.Postamat.Транзакция result = this.fТранзакция;
                // *** Start programmer edit section *** (Ячейка.Транзакция Get end)

                // *** End programmer edit section *** (Ячейка.Транзакция Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ячейка.Транзакция Set start)

                // *** End programmer edit section *** (Ячейка.Транзакция Set start)
                this.fТранзакция = value;
                // *** Start programmer edit section *** (Ячейка.Транзакция Set end)

                // *** End programmer edit section *** (Ячейка.Транзакция Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Postamat.Постамат.
        /// </summary>
        // *** Start programmer edit section *** (Ячейка.Постамат CustomAttributes)

        // *** End programmer edit section *** (Ячейка.Постамат CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Постамат"})]
        public virtual IIS.Postamat.Постамат Постамат
        {
            get
            {
                // *** Start programmer edit section *** (Ячейка.Постамат Get start)

                // *** End programmer edit section *** (Ячейка.Постамат Get start)
                IIS.Postamat.Постамат result = this.fПостамат;
                // *** Start programmer edit section *** (Ячейка.Постамат Get end)

                // *** End programmer edit section *** (Ячейка.Постамат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ячейка.Постамат Set start)

                // *** End programmer edit section *** (Ячейка.Постамат Set start)
                this.fПостамат = value;
                // *** Start programmer edit section *** (Ячейка.Постамат Set end)

                // *** End programmer edit section *** (Ячейка.Постамат Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЯчейкаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЯчейкаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЯчейкаE", typeof(IIS.Postamat.Ячейка));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Ячейка.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЯчейка CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЯчейка CustomAttributes)
    public class DetailArrayOfЯчейка : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Postamat.DetailArrayOfЯчейка members)

        // *** End programmer edit section *** (IIS.Postamat.DetailArrayOfЯчейка members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Ячейка by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Ячейка.
        /// </summary>
        public DetailArrayOfЯчейка(IIS.Postamat.Постамат fПостамат) : 
                base(typeof(Ячейка), ((ICSSoft.STORMNET.DataObject)(fПостамат)))
        {
        }
        
        public IIS.Postamat.Ячейка this[int index]
        {
            get
            {
                return ((IIS.Postamat.Ячейка)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Postamat.Ячейка dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
